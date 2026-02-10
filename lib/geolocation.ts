import { getSupabase } from "./supabase";

interface GeoResult {
  city: string;
  country: string;
  countryCode: string;
}

/**
 * Look up the location for an IP address using ip-api.com.
 * Returns a short string like "San Francisco, US" or null on failure.
 * Caches the result in chat_sessions.metadata.location.
 */
export async function resolveIpLocation(
  sessionId: string,
  ipAddress: string | null,
  existingMetadata: Record<string, unknown> | null
): Promise<string | null> {
  // Return cached value if available
  if (existingMetadata?.location) {
    return existingMetadata.location as string;
  }

  if (!ipAddress || ipAddress === "unknown" || ipAddress === "127.0.0.1") {
    return null;
  }

  try {
    const res = await fetch(
      `http://ip-api.com/json/${ipAddress}?fields=city,country,countryCode`,
      { signal: AbortSignal.timeout(3000) }
    );

    if (!res.ok) return null;

    const data: GeoResult = await res.json();
    if (!data.city && !data.countryCode) return null;

    const location = data.city
      ? `${data.city}, ${data.countryCode}`
      : data.country || data.countryCode;

    // Cache in metadata
    const supabase = getSupabase();
    if (supabase && sessionId) {
      const newMetadata = { ...(existingMetadata || {}), location };
      await supabase
        .from("chat_sessions")
        .update({ metadata: newMetadata })
        .eq("id", sessionId);
    }

    return location;
  } catch {
    return null;
  }
}
