"use client";

import { useEffect, useRef } from "react";
import { Message, MessageBubble, TypingIndicator } from "./MessageBubble";

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
    // Only scroll when there are messages - prevents auto-scroll on initial load
    // which can cause the parent page to scroll when embedded in an iframe
    if (messages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, isLoading, toolStatus]);

  return (
    <div className="flex-1 w-full overflow-y-auto px-4 py-6 space-y-6">
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
    <div className="flex flex-col items-center justify-center min-h-full text-center px-4 py-4">
      <div className="w-16 h-16 rounded-2xl bg-[var(--kognitos-gray-800)] flex items-center justify-center mb-6 animate-pulse-glow">
        <svg
          fill="none"
          height="32"
          viewBox="-30 0 512 320"
          width="52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m391.986 130.171v-38.341c0-2.946-2.385-5.331-5.331-5.331h-171.336c-2.946 0-5.331 2.385-5.331 5.331v38.341c0 2.945-2.385 5.331-5.33 5.331h-24.341c-2.945 0-5.331-2.386-5.331-5.331v-38.341c0-2.946-2.385-5.331-5.33-5.331h-164.3253c-2.9455 0-5.3307 2.385-5.3307 5.331v87.338c0 2.945 2.3852 5.33 5.3307 5.33h45.3414c2.9455 0 5.3307 2.386 5.3307 5.331v38.341c0 2.946 2.3852 5.331 5.3307 5.331h171.3365c2.945 0 5.331-2.385 5.331-5.331v-38.341c0-2.945 2.385-5.331 5.33-5.331h24.341c2.945 0 5.33 2.386 5.33 5.331v38.341c0 2.946 2.386 5.331 5.331 5.331h164.336c2.946 0 5.331-2.385 5.331-5.331v-87.343c0-2.946-2.385-5.331-5.331-5.331h-45.341c-2.946 0-5.331-2.385-5.331-5.331z"
            fill="#f2fb90"
          />
        </svg>
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
