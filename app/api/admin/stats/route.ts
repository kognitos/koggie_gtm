import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase";
import { SUGGESTION_TEXTS, ENGAGED_MESSAGE_THRESHOLD } from "@/lib/constants";

export async function GET() {
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

  try {
    // Total sessions
    const { count: totalSessions } = await supabase
      .from("chat_sessions")
      .select("id", { count: "exact", head: true });

    // Total leads
    const { count: totalLeads } = await supabase
      .from("leads")
      .select("id", { count: "exact", head: true });

    // Engaged sessions (6+ messages)
    // Get message counts per session, then count those >= threshold
    const { data: sessionMsgCounts } = await supabase
      .from("chat_messages")
      .select("session_id");

    // Count messages per session
    const msgCountMap = new Map<string, number>();
    for (const row of sessionMsgCounts || []) {
      if (row.session_id) {
        msgCountMap.set(row.session_id, (msgCountMap.get(row.session_id) || 0) + 1);
      }
    }
    const engagedSessions = Array.from(msgCountMap.values()).filter(
      (c) => c >= ENGAGED_MESSAGE_THRESHOLD
    ).length;

    // Custom starts: sessions where first user message is not a suggestion
    const { data: allSessions } = await supabase
      .from("chat_sessions")
      .select("id");

    let customStarts = 0;
    if (allSessions && allSessions.length > 0) {
      // Fetch first user message for each session in parallel (batched)
      const batchSize = 50;
      for (let i = 0; i < allSessions.length; i += batchSize) {
        const batch = allSessions.slice(i, i + batchSize);
        const results = await Promise.all(
          batch.map(async (s) => {
            const { data: firstMsg } = await supabase
              .from("chat_messages")
              .select("content")
              .eq("session_id", s.id)
              .eq("role", "user")
              .order("created_at", { ascending: true })
              .limit(1)
              .single();
            return firstMsg?.content || null;
          })
        );
        for (const content of results) {
          if (content && !SUGGESTION_TEXTS.includes(content as typeof SUGGESTION_TEXTS[number])) {
            customStarts++;
          }
        }
      }
    }

    return new Response(
      JSON.stringify({
        totalSessions: totalSessions || 0,
        totalLeads: totalLeads || 0,
        engagedSessions,
        customStarts,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Admin stats API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
