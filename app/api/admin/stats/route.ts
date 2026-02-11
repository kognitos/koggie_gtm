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

    // Sessions today
    const todayCutoff = new Date();
    todayCutoff.setHours(0, 0, 0, 0);
    const { count: sessionsToday } = await supabase
      .from("chat_sessions")
      .select("id", { count: "exact", head: true })
      .gte("started_at", todayCutoff.toISOString());

    // Message counts per session (for engaged count + avg calculation)
    const { data: sessionMsgCounts } = await supabase
      .from("chat_messages")
      .select("session_id");

    const msgCountMap = new Map<string, number>();
    for (const row of sessionMsgCounts || []) {
      if (row.session_id) {
        msgCountMap.set(
          row.session_id,
          (msgCountMap.get(row.session_id) || 0) + 1
        );
      }
    }

    const engagedSessions = Array.from(msgCountMap.values()).filter(
      (c) => c >= ENGAGED_MESSAGE_THRESHOLD
    ).length;

    // Avg messages per session
    const totalMessages = Array.from(msgCountMap.values()).reduce(
      (sum, c) => sum + c,
      0
    );
    const sessionsWithMessages = msgCountMap.size;
    const avgMessages =
      sessionsWithMessages > 0
        ? Math.round((totalMessages / sessionsWithMessages) * 10) / 10
        : 0;

    // Conversion rate
    const conversionRate =
      totalSessions && totalSessions > 0
        ? Math.round(((totalLeads || 0) / totalSessions) * 1000) / 10
        : 0;

    // Custom starts
    const { data: allSessions } = await supabase
      .from("chat_sessions")
      .select("id");

    let customStarts = 0;
    if (allSessions && allSessions.length > 0) {
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
          if (
            content &&
            !SUGGESTION_TEXTS.includes(
              content as (typeof SUGGESTION_TEXTS)[number]
            )
          ) {
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
        sessionsToday: sessionsToday || 0,
        avgMessages,
        conversionRate,
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
