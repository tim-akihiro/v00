// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "geist/font";

export const metadata: Metadata = {
  title: "v0 Creative Agency",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${Geist.variable} ${Geist_Mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
