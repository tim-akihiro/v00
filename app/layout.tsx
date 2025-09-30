import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
=======
import { Literata } from "next/font/google";

const literata = Literata({ subsets: ["latin"], variable: "--font-sans" });
>>>>>>> be5e2d4 (typography: use Inter via next/font)

export const metadata: Metadata = { title: "v0 Creative Agency", description: "Portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<<<<<<< HEAD
    <html lang="de" className={inter.variable}>
=======
    <html lang="de" className={literata.variable}>
>>>>>>> be5e2d4 (typography: use Inter via next/font)
      <body className="font-sans">{children}</body>
    </html>
  );
}
