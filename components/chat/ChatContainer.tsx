"use client";

import { useState, useCallback } from "react";
import { Message } from "./MessageBubble";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    setError(null);
    
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
              if (parsed.content) {
                fullContent += parsed.content;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId ? { ...m, content: fullContent } : m
                  )
                );
              }
            } catch {
              // Ignore parse errors for incomplete chunks
            }
          }
        }
      }

      setStreamingMessageId(null);
    } catch (err) {
      setIsLoading(false);
      setStreamingMessageId(null);
      setError(err instanceof Error ? err.message : "An error occurred");
      
      // Remove the empty assistant message if it was added
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <MessageList
        messages={messages}
        isLoading={isLoading}
        streamingMessageId={streamingMessageId}
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
