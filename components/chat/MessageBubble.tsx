"use client";

import ReactMarkdown from "react-markdown";
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

// Parse quick reply options from message content
// Format: [[Option 1|Option 2|Option 3]]
function parseQuickReplies(content: string): { text: string; options: string[] } {
  const match = content.match(/\[\[([^\]]+)\]\]\s*$/);
  if (!match) {
    return { text: content, options: [] };
  }
  const options = match[1].split("|").map((opt) => opt.trim());
  const text = content.replace(/\[\[([^\]]+)\]\]\s*$/, "").trim();
  return { text, options };
}

function QuickReplyButton({ text }: { text: string }) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent("koggie-suggestion", { detail: text })
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-3 py-1.5 text-sm text-[var(--kognitos-yellow)] bg-transparent border border-[var(--kognitos-yellow)] rounded-full hover:bg-[var(--kognitos-yellow)] hover:text-[var(--kognitos-black)] transition-colors"
    >
      {text}
    </button>
  );
}

export function MessageBubble({ message, isStreaming }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const { text, options } = isUser
    ? { text: message.content, options: [] }
    : parseQuickReplies(message.content);

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
        {isUser ? (
          <div className="text-sm leading-relaxed">{message.content}</div>
        ) : (
          <div className="prose-kognitos text-sm leading-relaxed">
{/* Show typing dots if streaming but no content yet */}
            {isStreaming && !text && (
              <div className="flex items-center gap-2 py-1">
                <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
                <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
                <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
              </div>
            )}
            {text && (
              <>
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-lg font-bold text-[var(--kognitos-white)] mt-4 mb-2 first:mt-0">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-base font-semibold text-[var(--kognitos-white)] mt-4 mb-2 first:mt-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-sm font-semibold text-[var(--kognitos-white)] mt-3 mb-1 first:mt-0">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="mb-3 last:mb-0">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-outside ml-4 mb-3 space-y-1 last:mb-0">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-outside ml-4 mb-3 space-y-1 last:mb-0">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="pl-1">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-[var(--kognitos-white)]">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-[var(--kognitos-gray-300)]">
                        {children}
                      </em>
                    ),
                    code: ({ children }) => (
                      <code className="px-1.5 py-0.5 bg-[var(--kognitos-gray-800)] text-[var(--kognitos-yellow)] rounded text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-[var(--kognitos-gray-800)] rounded-lg p-3 overflow-x-auto mb-3 last:mb-0 text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {children}
                      </pre>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--kognitos-yellow)] hover:underline"
                      >
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-[var(--kognitos-yellow)] pl-3 italic text-[var(--kognitos-gray-400)] mb-3 last:mb-0">
                        {children}
                      </blockquote>
                    ),
                    hr: () => (
                      <hr className="border-[var(--kognitos-gray-700)] my-4" />
                    ),
                  }}
                >
                  {text}
                </ReactMarkdown>
                {isStreaming && (
                  <span className="inline-block w-2 h-4 ml-1 bg-[var(--kognitos-yellow)] animate-pulse" />
                )}
              </>
            )}
            {/* Quick Reply Buttons */}
            {options.length > 0 && !isStreaming && (
              <div className="flex flex-wrap gap-2 mt-3">
                {options.map((option, index) => (
                  <QuickReplyButton key={index} text={option} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface TypingIndicatorProps {
  toolStatus?: string | null;
}

export function TypingIndicator({ toolStatus }: TypingIndicatorProps) {
  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[var(--kognitos-gray-800)]">
        <LogoMark size={16} />
      </div>
      <div className="flex items-center gap-2 py-3">
        {toolStatus ? (
          <>
            <span className="w-2 h-2 rounded-full bg-[var(--kognitos-yellow)] animate-pulse" />
            <span className="text-sm text-[var(--kognitos-gray-400)]">{toolStatus}</span>
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
            <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
            <span className="w-2 h-2 rounded-full bg-[var(--kognitos-gray-400)] typing-dot" />
          </>
        )}
      </div>
    </div>
  );
}
