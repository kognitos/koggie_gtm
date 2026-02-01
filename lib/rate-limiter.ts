import { kv } from "@vercel/kv";

const RATE_LIMIT = 50; // messages per hour
const WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  const key = `rate-limit:${ip}`;
  const now = Date.now();

  try {
    // Get current state
    const data = await kv.get<{ count: number; resetAt: number }>(key);

    if (!data || now > data.resetAt) {
      // New window - set initial count
      const resetAt = now + WINDOW_MS;
      await kv.set(key, { count: 1, resetAt }, { px: WINDOW_MS });
      return {
        success: true,
        remaining: RATE_LIMIT - 1,
        resetAt,
      };
    }

    if (data.count >= RATE_LIMIT) {
      // Rate limit exceeded
      return {
        success: false,
        remaining: 0,
        resetAt: data.resetAt,
      };
    }

    // Increment count
    const newCount = data.count + 1;
    await kv.set(key, { count: newCount, resetAt: data.resetAt }, { px: data.resetAt - now });

    return {
      success: true,
      remaining: RATE_LIMIT - newCount,
      resetAt: data.resetAt,
    };
  } catch (error) {
    // If KV is not available (local dev), allow request
    console.warn("Rate limiting unavailable:", error);
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
