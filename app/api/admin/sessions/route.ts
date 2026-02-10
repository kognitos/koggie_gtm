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
  // Verify admin authentication
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
  const filter = searchParams.get("filter") || "all"; // all | leads | engaged | custom
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 25;

  try {
    // For "leads" filter, we need to pre-fetch lead session IDs
    let leadSessionIdSet = new Set<string>();
    if (filter === "leads" || filter === "all") {
      const { data: allLeads } = await supabase
        .from("leads")
        .select("session_id");
      for (const l of allLeads || []) {
        if (l.session_id) leadSessionIdSet.add(l.session_id);
      }
    }

    // Build base query -- fetch all sessions (we'll filter/sort in JS for complex filters)
    let query = supabase
      .from("chat_sessions")
      .select(
        "id, ip_address, email, started_at, last_message_at, message_count, metadata",
        { count: "exact" }
      )
      .order("started_at", { ascending: false });

    // For leads filter, restrict to lead session IDs
    if (filter === "leads") {
      if (leadSessionIdSet.size === 0) {
        return new Response(
          JSON.stringify({ sessions: [], total: 0, page, totalPages: 0 }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
      query = query.in("id", Array.from(leadSessionIdSet));
    }

    // Apply search filter
    let searchLeadSessionIds: string[] = [];
    if (search) {
      const { data: matchingLeads } = await supabase
        .from("leads")
        .select("session_id")
        .ilike("email", `%${search}%`);
      searchLeadSessionIds = (matchingLeads || [])
        .map((l) => l.session_id)
        .filter(Boolean) as string[];
    }

    if (search) {
      if (searchLeadSessionIds.length > 0) {
        query = query.or(
          `email.ilike.%${search}%,id.in.(${searchLeadSessionIds.join(",")})`
        );
      } else {
        query = query.ilike("email", `%${search}%`);
      }
    }

    // For "engaged" and "custom" we need to fetch broader, then filter in JS
    // For "all" with smart sort, also fetch broader
    // Fetch up to 500 to have enough to filter, then paginate
    const fetchLimit = filter === "all" && !search ? 500 : 500;
    query = query.range(0, fetchLimit - 1);

    const { data: rawSessions, error } = await query;
    if (error) throw error;

    // Enrich sessions with message count, first message, lead info
    const enriched: EnrichedSession[] = await Promise.all(
      (rawSessions || []).map(async (s) => {
        const { data: firstMsg } = await supabase
          .from("chat_messages")
          .select("content")
          .eq("session_id", s.id)
          .eq("role", "user")
          .order("created_at", { ascending: true })
          .limit(1)
          .single();

        const { count: msgCount } = await supabase
          .from("chat_messages")
          .select("id", { count: "exact", head: true })
          .eq("session_id", s.id);

        const { data: lead } = await supabase
          .from("leads")
          .select("email, source")
          .eq("session_id", s.id)
          .limit(1)
          .single();

        const firstContent = firstMsg?.content || null;

        const metadata = s.metadata as Record<string, unknown> | null;

        return {
          id: s.id,
          ip_address: s.ip_address,
          email: s.email,
          started_at: s.started_at,
          last_message_at: s.last_message_at,
          message_count: msgCount || 0,
          lead_email: lead?.email || null,
          lead_source: lead?.source || null,
          location: (metadata?.location as string) || null,
          first_message: firstContent,
          preview: firstContent
            ? firstContent.slice(0, 120) +
              (firstContent.length > 120 ? "..." : "")
            : null,
        };
      })
    );

    // Apply filter
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

    // Sort by relevance
    switch (filter) {
      case "leads":
        // Most recent first
        filtered.sort(
          (a, b) =>
            new Date(b.started_at).getTime() - new Date(a.started_at).getTime()
        );
        break;
      case "engaged":
        // Most messages first, then most recent
        filtered.sort(
          (a, b) =>
            b.message_count - a.message_count ||
            new Date(b.started_at).getTime() - new Date(a.started_at).getTime()
        );
        break;
      case "custom":
        // Most messages first, then most recent
        filtered.sort(
          (a, b) =>
            b.message_count - a.message_count ||
            new Date(b.started_at).getTime() - new Date(a.started_at).getTime()
        );
        break;
      default:
        // All: leads first, then by message count, then by date
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

    // Paginate
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginated = filtered.slice(offset, offset + limit);

    // Strip first_message from response (only used for filtering)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sessions = paginated.map(({ first_message: _, ...rest }) => rest);

    return new Response(
      JSON.stringify({ sessions, total, page, totalPages }),
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
