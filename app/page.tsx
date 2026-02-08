import { ChatContainer } from "@/components/chat/ChatContainer";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col bg-[var(--kognitos-black)]">
      <div className="flex-1 overflow-hidden w-full">
        <ChatContainer />
      </div>
    </main>
  );
}
