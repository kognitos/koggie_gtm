import { ChatContainer } from "@/components/chat/ChatContainer";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-[var(--kognitos-black)]">
      <div className="flex-1 overflow-hidden max-w-3xl mx-auto w-full">
        <ChatContainer />
      </div>
    </main>
  );
}
