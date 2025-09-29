"use client"
import { useState } from "react"

/**
 * Kontaktformular zur Übermittlung von Nachrichten.
 *
 * Diese Komponente kapselt die Form‑Logik in einer `onSubmit`‑Funktion und
 * setzt Lade‑ und Erfolgzustände korrekt. Das Formular wird erst nach einem
 * erfolgreichen Submit geleert. Fehlerhafte oder duplizierte Codefragmente
 * aus der ursprünglichen Fassung wurden entfernt, um Syntaxfehler zu vermeiden.
 */
export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setOk(null)

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      setOk(Boolean(json?.ok))
      // Bei Erfolg Formular leeren
      if (json?.ok) {
        e.currentTarget.reset()
      }
    } catch {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold">Kontakt</h2>
      <form onSubmit={onSubmit} className="mt-4 space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="w-full border p-3 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="E‑Mail"
          required
          className="w-full border p-3 rounded"
        />
        <textarea
          name="message"
          placeholder="Nachricht"
          required
          rows={5}
          className="w-full border p-3 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full border p-3 rounded font-medium"
        >
          {loading ? "Senden…" : "Senden"}
        </button>
        {ok === true && <p className="text-green-600">Danke. Wir melden uns.</p>}
        {ok === false && (
          <p className="text-red-600">Fehler beim Senden. Bitte später erneut.</p>
        )}
      </form>
    </section>
  )
}
