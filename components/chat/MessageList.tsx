"use client";

import { useEffect, useRef } from "react";
import { Message, MessageBubble, TypingIndicator } from "./MessageBubble";
import { LogoMark } from "@/components/ui/Logo";

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
  streamingMessageId?: string | null;
  toolStatus?: string | null;
}

export function MessageList({
  messages,
  isLoading,
  streamingMessageId,
  toolStatus,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, toolStatus]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
      {messages.length === 0 ? (
        <WelcomeMessage />
      ) : (
        messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isStreaming={streamingMessageId === message.id}
          />
        ))
      )}
      {(isLoading || toolStatus) && !streamingMessageId && (
        <TypingIndicator toolStatus={toolStatus} />
      )}
      <div ref={bottomRef} />
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-[var(--kognitos-gray-800)] flex items-center justify-center mb-6 animate-pulse-glow">
        <LogoMark size={20} />
      </div>
      <h2 className="text-xl font-semibold text-[var(--kognitos-white)] mb-2">
        Hi, I&apos;m Knox
      </h2>
      <p className="text-[var(--kognitos-gray-400)] max-w-md mb-8">
        I&apos;m here to help you learn about Kognitos and see if it&apos;s a fit
        for your automation needs. What brings you here today?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
        <SuggestionButton text="How can I trust AI to not make mistakes?" />
        <SuggestionButton text="How can AI help reduce costs?" />
        <SuggestionButton text="What finance processes can you automate?" />
        <SuggestionButton text="How is this different from RPA?" />
      </div>
      <ConsentNotice />
    </div>
  );
}

function ConsentNotice() {
  return (
    <p className="mt-8 text-xs text-[var(--kognitos-gray-500)] max-w-md">
      This conversation is recorded to improve our service.{" "}
      <a
        href="https://kognitos.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-[var(--kognitos-gray-400)] transition-colors"
      >
        Privacy Policy
      </a>
    </p>
  );
}

function SuggestionButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="px-4 py-3 text-sm text-left text-[var(--kognitos-gray-200)] bg-[var(--kognitos-gray-900)] hover:bg-[var(--kognitos-gray-800)] border border-[var(--kognitos-gray-700)] rounded-xl transition-colors"
      onClick={() => {
        // Dispatch custom event to trigger message send
        window.dispatchEvent(
          new CustomEvent("koggie-suggestion", { detail: text })
        );
      }}
    >
      {text}
    </button>
  );
}
