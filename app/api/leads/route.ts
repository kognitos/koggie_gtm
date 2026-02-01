import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, sessionId, source = "report_request" } = body as {
      email: string;
      sessionId?: string;
      source?: string;
    };

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      // In development without Supabase, just return success
      console.log("Lead captured (dev mode):", email);
      return new Response(
        JSON.stringify({ success: true }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { error } = await supabase.from("leads").insert({
      email,
      session_id: sessionId || null,
      source,
    });

    if (error) {
      console.error("Error saving lead:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Leads API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
