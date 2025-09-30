import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "v0 Creative Agency", description: "Portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="font-sans">{children}</body>
    </html>
  );
}
