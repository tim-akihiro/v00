// components/GlassNavbar.tsx
"use client";
import Link from "next/link";

export default function GlassNavbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/40 bg-white/30 px-4 py-3 backdrop-blur-md shadow-lg ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold">Unternehmensberatung</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#leistungen">Leistungen</Link>
            <Link href="#preise">Preise</Link>
            <Link href="#kontakt" className="rounded-lg bg-black/80 px-3 py-1.5 text-white">Kontakt</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
