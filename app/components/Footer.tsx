// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-4xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} Zukunftsberatung. Alle Rechte vorbehalten.</p>
        <nav className="flex gap-4">
          <a href="/rechtstexte#impressum">Impressum</a>
          <a href="/rechtstexte#datenschutz">Datenschutz</a>
          <a href="/rechtstexte#cookies">Cookies</a>
          <a href="/rechtstexte#agb">AGB</a>
        </nav>
      </div>
    </footer>
  );
}
