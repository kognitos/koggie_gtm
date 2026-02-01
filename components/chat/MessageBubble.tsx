"use client";

import { LogoMark } from "@/components/ui/Logo";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface MessageBubbleProps {
  message: Message;
  isStreaming?: boolean;
}

export function MessageBubble({ message, isStreaming }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 animate-fade-in ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser
            ? "bg-[var(--kognitos-yellow)] text-[var(--kognitos-black)]"
            : "bg-[var(--kognitos-gray-800)]"
        }`}
      >
        {isUser ? (
          <span className="text-sm font-semibold">U</span>
        ) : (
          <LogoMark size={16} />
        )}
      </div>

      {/* Message Content */}
      <div
        className={`max-w-[80%] ${
          isUser
            ? "bg-[var(--kognitos-gray-800)] text-[var(--kognitos-white)] rounded-2xl rounded-tr-md px-4 py-3"
            : "text-[var(--kognitos-gray-200)]"
        }`}
      >
        <div className="whitespace-pre-wrap text-sm leading-relaxed">
          {message.content}
          {isStreaming && !isUser && (
            <span className="inline-block w-2 h-4 ml-1 bg-[var(--kognitos-yellow)] animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[var(--kognitos-gray-800)]">
        <LogoMark size={16} />
      </div>
      <div className="flex items-center gap-1 py-3">
        <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
        <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
        <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
      </div>
    </div>
  );
}
