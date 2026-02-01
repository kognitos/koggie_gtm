import { NextRequest } from "next/server";
import { anthropic, CLAUDE_MODEL, SALES_SYSTEM_PROMPT } from "@/lib/claude";
import { checkRateLimit, formatRetryAfter } from "@/lib/rate-limiter";
import { getMarketingContent } from "@/lib/content-loader";
import { createChatSession, saveChatMessage } from "@/lib/supabase";

export const runtime = "nodejs";
export const maxDuration = 60;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    // Get client info
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0].trim() || "unknown";
    const userAgent = request.headers.get("user-agent") || null;

    // Check rate limit
    const rateLimitResult = await checkRateLimit(ip);

    if (!rateLimitResult.success) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded" }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": formatRetryAfter(rateLimitResult.resetAt).toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitResult.resetAt.toString(),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();
    const { messages, sessionId: existingSessionId } = body as {
      messages: ChatMessage[];
      sessionId?: string;
    };

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create or use existing session
    let sessionId = existingSessionId;
    if (!sessionId) {
      sessionId = await createChatSession(ip, userAgent) || undefined;
    }

    // Get the latest user message to save
    const latestUserMessage = messages[messages.length - 1];
    if (latestUserMessage?.role === "user" && sessionId) {
      await saveChatMessage(sessionId, "user", latestUserMessage.content);
    }

    // Load marketing content
    const marketingContent = getMarketingContent();

    // Build system prompt with marketing content
    const fullSystemPrompt = `${SALES_SYSTEM_PROMPT}

${marketingContent}`;

    // Create streaming response
    const stream = await anthropic.messages.stream({
      model: CLAUDE_MODEL,
      max_tokens: 1024,
      system: fullSystemPrompt,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    // Collect full response for saving to DB
    let fullResponse = "";

    // Create a readable stream for the response
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          // Send session ID first if newly created
          if (sessionId && !existingSessionId) {
            const sessionData = JSON.stringify({ sessionId });
            controller.enqueue(encoder.encode(`data: ${sessionData}\n\n`));
          }

          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              fullResponse += event.delta.text;
              const data = JSON.stringify({ content: event.delta.text });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }

          // Save assistant response to database
          if (sessionId && fullResponse) {
            await saveChatMessage(sessionId, "assistant", fullResponse);
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
        "X-RateLimit-Reset": rateLimitResult.resetAt.toString(),
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
