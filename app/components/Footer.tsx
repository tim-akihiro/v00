export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} Zukunftsberatung. Alle Rechte vorbehalten.</p>
        <p>Design & Build: Zukunftsberatung</p>
      </div>
    </footer>
  );
}
