import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { anthropic, CLAUDE_MODEL, SALES_SYSTEM_PROMPT } from "@/lib/claude";
import { checkRateLimit, formatRetryAfter } from "@/lib/rate-limiter";
import { createChatSession, saveChatMessage } from "@/lib/supabase";
import { tools, executeTool } from "@/lib/agent-tools";

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
      return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": formatRetryAfter(rateLimitResult.resetAt).toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": rateLimitResult.resetAt.toString(),
        },
      });
    }

    // Parse request body
    const body = await request.json();
    const { messages, sessionId: existingSessionId, email } = body as {
      messages: ChatMessage[];
      sessionId?: string;
      email?: string;
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
      sessionId = (await createChatSession(ip, userAgent, email)) || undefined;
    }

    // Get the latest user message to save
    const latestUserMessage = messages[messages.length - 1];
    if (latestUserMessage?.role === "user" && sessionId) {
      await saveChatMessage(sessionId, "user", latestUserMessage.content);
    }

    // Build messages for Claude API
    const claudeMessages: Anthropic.MessageParam[] = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    // Create streaming response with tool use support
    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          // Send session ID first if newly created
          if (sessionId && !existingSessionId) {
            const sessionData = JSON.stringify({ sessionId });
            controller.enqueue(encoder.encode(`data: ${sessionData}\n\n`));
          }

          let fullResponse = "";
          let currentMessages = [...claudeMessages];
          let continueLoop = true;

          // Tool use loop - keep going until we get a final text response
          while (continueLoop) {
            const response = await anthropic.messages.create({
              model: CLAUDE_MODEL,
              max_tokens: 4096,
              system: SALES_SYSTEM_PROMPT,
              tools,
              messages: currentMessages,
            });

            // Process the response content
            for (const block of response.content) {
              if (block.type === "text") {
                // Stream text content
                fullResponse += block.text;
                const data = JSON.stringify({ content: block.text });
                controller.enqueue(encoder.encode(`data: ${data}\n\n`));
              } else if (block.type === "tool_use") {
                // Send tool use indicator to client
                const toolStatus = JSON.stringify({
                  tool_use: {
                    name: block.name,
                    searching: true,
                  },
                });
                controller.enqueue(encoder.encode(`data: ${toolStatus}\n\n`));

                // Execute the tool
                const toolResult = await executeTool(
                  block.name,
                  block.input as Record<string, unknown>,
                  sessionId
                );

                // Add assistant message with tool use and tool result to continue conversation
                currentMessages = [
                  ...currentMessages,
                  {
                    role: "assistant" as const,
                    content: response.content,
                  },
                  {
                    role: "user" as const,
                    content: [
                      {
                        type: "tool_result" as const,
                        tool_use_id: block.id,
                        content: toolResult,
                      },
                    ],
                  },
                ];
              }
            }

            // Check if we should continue the loop
            if (response.stop_reason === "end_turn") {
              continueLoop = false;
            } else if (response.stop_reason === "tool_use") {
              // Continue to process tool results
              continueLoop = true;
            } else {
              continueLoop = false;
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
          const errorData = JSON.stringify({
            error: "An error occurred while processing your request.",
          });
          controller.enqueue(encoder.encode(`data: ${errorData}\n\n`));
          controller.close();
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
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
