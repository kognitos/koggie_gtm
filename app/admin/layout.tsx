import { SessionProvider } from "@/components/providers/SessionProvider";

export const metadata = {
  title: "Knox Admin | Chat Dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
