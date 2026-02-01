import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

function getSupabase(): SupabaseClient | null {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  supabaseInstance = createClient(supabaseUrl, supabaseKey);
  return supabaseInstance;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY);
}

// Chat session types
export interface ChatSession {
  id: string;
  ip_address: string | null;
  user_agent: string | null;
  started_at: string;
  last_message_at: string;
  message_count: number;
  metadata: Record<string, unknown>;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
  tokens_used: number | null;
  metadata: Record<string, unknown>;
}

// Create a new chat session
export async function createChatSession(
  ip: string | null,
  userAgent: string | null
): Promise<string | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from("chat_sessions")
      .insert({
        ip_address: ip,
        user_agent: userAgent,
      })
      .select("id")
      .single();

    if (error) throw error;
    return data.id;
  } catch (error) {
    console.error("Failed to create chat session:", error);
    return null;
  }
}

// Save a message to a session
export async function saveChatMessage(
  sessionId: string,
  role: "user" | "assistant",
  content: string,
  tokensUsed?: number
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase || !sessionId) return;

  try {
    // Insert the message
    const { error: msgError } = await supabase.from("chat_messages").insert({
      session_id: sessionId,
      role,
      content,
      tokens_used: tokensUsed || null,
    });

    if (msgError) throw msgError;

    // Update session last_message_at
    await supabase
      .from("chat_sessions")
      .update({ last_message_at: new Date().toISOString() })
      .eq("id", sessionId);
  } catch (error) {
    console.error("Failed to save chat message:", error);
  }
}

// Export a getter for direct supabase access if needed
export { getSupabase };
