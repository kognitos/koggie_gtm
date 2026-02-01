import { ChatContainer } from "@/components/chat/ChatContainer";
import { Logo } from "@/components/ui/Logo";

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
                Kognitos
              </h1>
              <p className="text-xs text-[var(--kognitos-gray-400)]">
                AI Sales Assistant
              </p>
            </div>
          </div>
          <a
            href="https://www.kognitos.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium bg-[var(--kognitos-yellow)] text-[var(--kognitos-black)] rounded-lg hover:bg-[var(--kognitos-yellow-dim)] transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden max-w-3xl mx-auto w-full">
        <ChatContainer />
      </div>
    </main>
  );
}
