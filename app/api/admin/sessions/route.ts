import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase";
import { SUGGESTION_TEXTS, ENGAGED_MESSAGE_THRESHOLD } from "@/lib/constants";

interface EnrichedSession {
  id: string;
  ip_address: string | null;
  email: string | null;
  started_at: string;
  last_message_at: string;
  message_count: number;
  lead_email: string | null;
  lead_source: string | null;
  location: string | null;
  preview: string | null;
  first_message: string | null;
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email?.endsWith("@kognitos.com")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return new Response(JSON.stringify({ error: "Database not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const searchScope = searchParams.get("searchScope") || "all"; // all | user | assistant
  const filter = searchParams.get("filter") || "all";
  const sort = searchParams.get("sort") || "";
  const days = searchParams.get("days") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 25;

  try {
    // ---------- 1. Batch-fetch all leads (one query) ----------
    const { data: allLeads } = await supabase
      .from("leads")
      .select("session_id, email, source");

    const leadMap = new Map<
      string,
      { email: string; source: string }
    >();
    const leadSessionIdSet = new Set<string>();
    for (const l of allLeads || []) {
      if (l.session_id) {
        leadSessionIdSet.add(l.session_id);
        leadMap.set(l.session_id, { email: l.email, source: l.source });
      }
    }

    // ---------- 2. Build sessions query ----------
    let query = supabase
      .from("chat_sessions")
      .select(
        "id, ip_address, email, started_at, last_message_at, message_count, metadata"
      )
      .order("started_at", { ascending: false });

    // Date range
    if (days && !isNaN(parseInt(days))) {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - parseInt(days));
      query = query.gte("started_at", cutoff.toISOString());
    }

    // Leads-only filter
    if (filter === "leads") {
      if (leadSessionIdSet.size === 0) {
        return new Response(
          JSON.stringify({ sessions: [], total: 0, page, totalPages: 0, hasMore: false }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
      query = query.in("id", Array.from(leadSessionIdSet));
    }

    // Search: collect matching session IDs from leads + messages in parallel
    if (search) {
      // Build message search query with optional role filter
      let msgQuery = supabase
        .from("chat_messages")
        .select("session_id")
        .ilike("content", `%${search}%`);
      if (searchScope === "user" || searchScope === "assistant") {
        msgQuery = msgQuery.eq("role", searchScope);
      }

      const [{ data: matchingLeads }, { data: matchingMessages }] =
        await Promise.all([
          supabase
            .from("leads")
            .select("session_id")
            .ilike("email", `%${search}%`),
          msgQuery,
        ]);

      const searchIds = new Set<string>();
      for (const l of matchingLeads || []) {
        if (l.session_id) searchIds.add(l.session_id);
      }
      for (const m of matchingMessages || []) {
        if (m.session_id) searchIds.add(m.session_id);
      }

      if (searchIds.size > 0) {
        query = query.or(
          `email.ilike.%${search}%,id.in.(${Array.from(searchIds).join(",")})`
        );
      } else {
        query = query.ilike("email", `%${search}%`);
      }
    }

    // Fetch up to 500
    query = query.range(0, 499);

    const { data: rawSessions, error } = await query;
    if (error) throw error;

    const sessionIds = (rawSessions || []).map((s) => s.id);

    // ---------- 3. Batch-fetch first user messages (one query) ----------
    // We use an RPC-like approach: fetch the earliest user message per session
    // by fetching all user messages for these sessions, then picking the first per session.
    // For up to 500 sessions this is much faster than 500 individual queries.
    let firstMsgMap = new Map<string, string>();
    if (sessionIds.length > 0) {
      // Fetch in chunks of 200 session IDs to stay within URL limits
      const chunkSize = 200;
      for (let i = 0; i < sessionIds.length; i += chunkSize) {
        const chunk = sessionIds.slice(i, i + chunkSize);
        const { data: userMsgs } = await supabase
          .from("chat_messages")
          .select("session_id, content, created_at")
          .in("session_id", chunk)
          .eq("role", "user")
          .order("created_at", { ascending: true });

        for (const msg of userMsgs || []) {
          // Only keep the first per session
          if (msg.session_id && !firstMsgMap.has(msg.session_id)) {
            firstMsgMap.set(msg.session_id, msg.content);
          }
        }
      }
    }

    // ---------- 4. Enrich (no extra queries per session) ----------
    const enriched: EnrichedSession[] = (rawSessions || []).map((s) => {
      const lead = leadMap.get(s.id);
      const firstContent = firstMsgMap.get(s.id) || null;
      const metadata = s.metadata as Record<string, unknown> | null;

      return {
        id: s.id,
        ip_address: s.ip_address,
        email: s.email,
        started_at: s.started_at,
        last_message_at: s.last_message_at,
        message_count: s.message_count || 0,
        lead_email: lead?.email || null,
        lead_source: lead?.source || null,
        location: (metadata?.location as string) || null,
        first_message: firstContent,
        preview: firstContent
          ? firstContent.slice(0, 120) +
            (firstContent.length > 120 ? "..." : "")
          : null,
      };
    });

    // ---------- 5. Filter ----------
    let filtered: EnrichedSession[];
    switch (filter) {
      case "leads":
        filtered = enriched.filter((s) => s.lead_email);
        break;
      case "engaged":
        filtered = enriched.filter(
          (s) => s.message_count >= ENGAGED_MESSAGE_THRESHOLD
        );
        break;
      case "custom":
        filtered = enriched.filter(
          (s) =>
            s.first_message &&
            !SUGGESTION_TEXTS.includes(
              s.first_message as (typeof SUGGESTION_TEXTS)[number]
            )
        );
        break;
      default:
        filtered = enriched;
    }

    // ---------- 6. Sort ----------
    if (sort) {
      switch (sort) {
        case "newest":
          filtered.sort(
            (a, b) =>
              new Date(b.started_at).getTime() -
              new Date(a.started_at).getTime()
          );
          break;
        case "oldest":
          filtered.sort(
            (a, b) =>
              new Date(a.started_at).getTime() -
              new Date(b.started_at).getTime()
          );
          break;
        case "most_messages":
          filtered.sort(
            (a, b) =>
              b.message_count - a.message_count ||
              new Date(b.started_at).getTime() -
                new Date(a.started_at).getTime()
          );
          break;
        case "fewest_messages":
          filtered.sort(
            (a, b) =>
              a.message_count - b.message_count ||
              new Date(b.started_at).getTime() -
                new Date(a.started_at).getTime()
          );
          break;
      }
    } else {
      switch (filter) {
        case "leads":
          filtered.sort(
            (a, b) =>
              new Date(b.started_at).getTime() -
              new Date(a.started_at).getTime()
          );
          break;
        case "engaged":
        case "custom":
          filtered.sort(
            (a, b) =>
              b.message_count - a.message_count ||
              new Date(b.started_at).getTime() -
                new Date(a.started_at).getTime()
          );
          break;
        default:
          filtered.sort((a, b) => {
            const aHasLead = a.lead_email ? 1 : 0;
            const bHasLead = b.lead_email ? 1 : 0;
            if (bHasLead !== aHasLead) return bHasLead - aHasLead;
            if (b.message_count !== a.message_count)
              return b.message_count - a.message_count;
            return (
              new Date(b.started_at).getTime() -
              new Date(a.started_at).getTime()
            );
          });
      }
    }

    // ---------- 7. Paginate ----------
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginated = filtered.slice(offset, offset + limit);
    const hasMore = page < totalPages;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sessions = paginated.map(({ first_message: _, ...rest }) => rest);

    return new Response(
      JSON.stringify({ sessions, total, page, totalPages, hasMore }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Admin sessions API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
