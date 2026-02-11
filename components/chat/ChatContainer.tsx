"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Message } from "./MessageBubble";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(
    null
  );
  const [remaining, setRemaining] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [toolStatus, setToolStatus] = useState<string | null>(null);
  const sessionIdRef = useRef<string | null>(null);
  const emailRef = useRef<string | null>(null);

  // Read email from URL ?u= param (base64), persist in sessionStorage, then strip from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("u");
    if (encoded) {
      try {
        const decoded = atob(encoded);
        emailRef.current = decoded;
        sessionStorage.setItem("knox_email", decoded);
      } catch {
        // Invalid base64, ignore
      }
      // Strip ?u= from the visible URL
      params.delete("u");
      const clean = params.toString();
      const newUrl = window.location.pathname + (clean ? `?${clean}` : "");
      window.history.replaceState({}, "", newUrl);
    } else {
      // No param — check sessionStorage for a previous visit
      const stored = sessionStorage.getItem("knox_email");
      if (stored) {
        emailRef.current = stored;
      }
    }
  }, []);

  // Expose session ID globally for other components (like lead capture)
  useEffect(() => {
    const handleGetSessionId = (e: CustomEvent) => {
      if (e.detail?.callback) {
        e.detail.callback(sessionIdRef.current);
      }
    };
    window.addEventListener("knox-get-session-id", handleGetSessionId as EventListener);
    return () => {
      window.removeEventListener("knox-get-session-id", handleGetSessionId as EventListener);
    };
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      setError(null);
      setToolStatus(null);

      // Add user message
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content,
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      // Create placeholder for assistant message
      const assistantId = `assistant-${Date.now()}`;
      const assistantMessage: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
      };

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            sessionId: sessionIdRef.current,
            email: emailRef.current,
          }),
        });

        // Check for rate limit
        const remainingHeader = response.headers.get("X-RateLimit-Remaining");
        if (remainingHeader) {
          setRemaining(parseInt(remainingHeader, 10));
        }

        if (!response.ok) {
          if (response.status === 429) {
            const retryAfter = response.headers.get("Retry-After");
            throw new Error(
              `Rate limit exceeded. Please try again in ${retryAfter} seconds.`
            );
          }
          throw new Error("Failed to send message. Please try again.");
        }

        // Add assistant message placeholder and start streaming
        setMessages((prev) => [...prev, assistantMessage]);
        setStreamingMessageId(assistantId);
        setIsLoading(false);

        // Read the stream
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          throw new Error("No response stream available");
        }

        let fullContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);

                // Check for session ID (sent at start of new sessions)
                if (parsed.sessionId) {
                  sessionIdRef.current = parsed.sessionId;
                  continue;
                }

                // Check for tool use status
                if (parsed.tool_use) {
                  const toolName = parsed.tool_use.name;
                  const friendlyNames: Record<string, string> = {
                    list_files: "Checking available documents...",
                    search_content: "Searching documents...",
                    read_file: "Reading document...",
                    capture_lead: "Saving your info...",
                  };
                  setToolStatus(friendlyNames[toolName] || "Thinking...");
                  continue;
                }

                // Check for error
                if (parsed.error) {
                  throw new Error(parsed.error);
                }

                if (parsed.content) {
                  setToolStatus(null); // Clear tool status when content arrives
                  fullContent += parsed.content;
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === assistantId ? { ...m, content: fullContent } : m
                    )
                  );
                }
              } catch (e) {
                // Only throw if it's an actual error, not a parse error
                if (e instanceof Error && e.message !== "Unexpected end of JSON input") {
                  // Check if this is our custom error
                  if (e.message && !e.message.includes("JSON")) {
                    throw e;
                  }
                }
              }
            }
          }
        }

        setStreamingMessageId(null);
        setToolStatus(null);
      } catch (err) {
        setIsLoading(false);
        setStreamingMessageId(null);
        setToolStatus(null);
        setError(err instanceof Error ? err.message : "An error occurred");

        // Remove the empty assistant message if it was added
        setMessages((prev) =>
          prev.filter((m) => m.id !== assistantId || m.content !== "")
        );
      }
    },
    [messages]
  );

  return (
    <div className="flex flex-col h-full w-full">
      <MessageList
        messages={messages}
        isLoading={isLoading}
        streamingMessageId={streamingMessageId}
        toolStatus={toolStatus}
      />
      {error && (
        <div className="px-4 py-2 bg-red-900/20 border-t border-red-800">
          <p className="text-sm text-red-400 text-center">{error}</p>
        </div>
      )}
      <ChatInput
        onSend={sendMessage}
        disabled={isLoading || streamingMessageId !== null}
        remaining={remaining}
      />
    </div>
  );
}
