import { getSupabase, isSupabaseConfigured } from "./supabase";

const RATE_LIMIT = 50; // messages per hour
const WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  const now = Date.now();

  // Skip rate limiting if Supabase is not configured (local dev)
  if (!isSupabaseConfigured()) {
    console.warn("Rate limiting disabled: Supabase not configured");
    return {
      success: true,
      remaining: RATE_LIMIT,
      resetAt: now + WINDOW_MS,
    };
  }

  const supabase = getSupabase();
  if (!supabase) {
    return {
      success: true,
      remaining: RATE_LIMIT,
      resetAt: now + WINDOW_MS,
    };
  }

  try {
    // Get current rate limit record for this IP
    const { data: existing, error: fetchError } = await supabase
      .from("rate_limits")
      .select("*")
      .eq("ip_address", ip)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      // PGRST116 = no rows found, which is fine
      throw fetchError;
    }

    const resetAt = now + WINDOW_MS;

    // No existing record or window expired - create new
    if (!existing || now > new Date(existing.reset_at).getTime()) {
      const { error: upsertError } = await supabase
        .from("rate_limits")
        .upsert({
          ip_address: ip,
          count: 1,
          reset_at: new Date(resetAt).toISOString(),
        });

      if (upsertError) throw upsertError;

      return {
        success: true,
        remaining: RATE_LIMIT - 1,
        resetAt,
      };
    }

    // Check if rate limit exceeded
    if (existing.count >= RATE_LIMIT) {
      return {
        success: false,
        remaining: 0,
        resetAt: new Date(existing.reset_at).getTime(),
      };
    }

    // Increment count
    const newCount = existing.count + 1;
    const { error: updateError } = await supabase
      .from("rate_limits")
      .update({ count: newCount })
      .eq("ip_address", ip);

    if (updateError) throw updateError;

    return {
      success: true,
      remaining: RATE_LIMIT - newCount,
      resetAt: new Date(existing.reset_at).getTime(),
    };
  } catch (error) {
    // If Supabase fails, allow request but log the error
    console.error("Rate limiting error:", error);
    return {
      success: true,
      remaining: RATE_LIMIT,
      resetAt: now + WINDOW_MS,
    };
  }
}

export function formatRetryAfter(resetAt: number): number {
  return Math.ceil((resetAt - Date.now()) / 1000);
}
