import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase";

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
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 25;
  const offset = (page - 1) * limit;

  try {
    let query = supabase
      .from("chat_sessions")
      .select(
        "id, ip_address, email, started_at, last_message_at, message_count, metadata",
        { count: "exact" }
      )
      .order("started_at", { ascending: false })
      .range(offset, offset + limit - 1);

    // Filter by session email if search is provided
    // Also find sessions with matching lead emails
    let leadSessionIds: string[] = [];
    if (search) {
      const { data: matchingLeads } = await supabase
        .from("leads")
        .select("session_id")
        .ilike("email", `%${search}%`);
      leadSessionIds = (matchingLeads || [])
        .map((l) => l.session_id)
        .filter(Boolean) as string[];
    }

    if (search) {
      if (leadSessionIds.length > 0) {
        query = query.or(`email.ilike.%${search}%,id.in.(${leadSessionIds.join(",")})`);
      } else {
        query = query.ilike("email", `%${search}%`);
      }
    }

    const { data: sessions, error, count } = await query;

    if (error) throw error;

    // For each session, fetch the first user message as a preview
    const sessionsWithPreview = await Promise.all(
      (sessions || []).map(async (s) => {
        const { data: firstMsg } = await supabase
          .from("chat_messages")
          .select("content")
          .eq("session_id", s.id)
          .eq("role", "user")
          .order("created_at", { ascending: true })
          .limit(1)
          .single();

        // Also get actual message count
        const { count: msgCount } = await supabase
          .from("chat_messages")
          .select("id", { count: "exact", head: true })
          .eq("session_id", s.id);

        // Check for lead
        const { data: lead } = await supabase
          .from("leads")
          .select("email, source")
          .eq("session_id", s.id)
          .limit(1)
          .single();

        return {
          ...s,
          message_count: msgCount || 0,
          lead_email: lead?.email || null,
          lead_source: lead?.source || null,
          preview: firstMsg?.content
            ? firstMsg.content.slice(0, 120) + (firstMsg.content.length > 120 ? "..." : "")
            : null,
        };
      })
    );

    return new Response(
      JSON.stringify({
        sessions: sessionsWithPreview,
        total: count || 0,
        page,
        totalPages: Math.ceil((count || 0) / limit),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Admin sessions API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
