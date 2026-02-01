import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knox | Kognitos Product Specialist",
  description: "Chat with Knox to learn how Kognitos delivers hallucination-free AI automation with living documentation and institutional memory.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
