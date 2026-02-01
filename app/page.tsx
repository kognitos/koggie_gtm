"use client";

import { ChatContainer } from "@/components/chat/ChatContainer";
import { Logo } from "@/components/ui/Logo";
import { CTAButtons } from "@/components/ui/CTAButtons";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-[var(--kognitos-black)]">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-[var(--kognitos-gray-800)] px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <div>
              <h1 className="text-sm font-semibold text-[var(--kognitos-white)]">
                Knox
              </h1>
              <p className="text-xs text-[var(--kognitos-gray-400)]">
                Kognitos Product Specialist
              </p>
            </div>
          </div>
          <CTAButtons />
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden max-w-3xl mx-auto w-full">
        <ChatContainer />
      </div>
    </main>
  );
}
