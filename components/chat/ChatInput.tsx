"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  remaining?: number;
}

export function ChatInput({ onSend, disabled, remaining }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (trimmed && !disabled) {
      onSend(trimmed);
      setInput("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [input]);

  // Listen for suggestion clicks
  useEffect(() => {
    const handleSuggestion = (e: CustomEvent<string>) => {
      onSend(e.detail);
    };

    window.addEventListener(
      "koggie-suggestion",
      handleSuggestion as EventListener
    );
    return () => {
      window.removeEventListener(
        "koggie-suggestion",
        handleSuggestion as EventListener
      );
    };
  }, [onSend]);

  return (
    <div className="border-t border-[var(--kognitos-gray-800)] bg-[var(--kognitos-black)] px-4 py-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-end gap-2 bg-[var(--kognitos-gray-900)] rounded-2xl border border-[var(--kognitos-gray-700)] focus-within:border-[var(--kognitos-yellow)] transition-colors">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Kognitos..."
            disabled={disabled}
            rows={1}
            className="flex-1 bg-transparent text-[var(--kognitos-white)] placeholder-[var(--kognitos-gray-600)] text-sm px-4 py-3 resize-none focus:outline-none disabled:opacity-50"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={disabled || !input.trim()}
            className="flex-shrink-0 m-2 p-2 rounded-xl bg-[var(--kognitos-yellow)] text-[var(--kognitos-black)] hover:bg-[var(--kognitos-yellow-dim)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <SendIcon />
          </button>
        </div>
        {remaining !== undefined && remaining <= 10 && (
          <p className="mt-2 text-xs text-[var(--kognitos-gray-600)] text-center">
            {remaining === 0
              ? "Rate limit reached. Please try again later."
              : `${remaining} messages remaining this hour`}
          </p>
        )}
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
