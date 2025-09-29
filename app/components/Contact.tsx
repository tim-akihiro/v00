"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setLoading(true)
      const fd = new FormData(e.currentTarget)
      const payload = {
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        message: String(fd.get("message") || ""),
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      setOk(res.ok)
      if (res.ok) e.currentTarget.reset()
    } catch {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <Input name="name" type="text" placeholder="John Doe" required />
      </div>
      <div>
        <label className="block text-sm mb-1">E-Mail</label>
        <Input name="email" type="email" placeholder="john@example.com" required />
      </div>
      <div>
        <label className="block text-sm mb-1">Nachricht</label>
        <textarea
          name="message"
          placeholder="Ihre Nachricht…"
          required
          className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
        />
      </div>
      <button type="submit" disabled={loading} className="rounded-md border px-4 py-2">
        {loading ? "Senden…" : "Senden"}
      </button>
      {ok === true && <p className="text-green-600 text-sm">Danke. Wir melden uns.</p>}
      {ok === false && <p className="text-red-600 text-sm">Senden fehlgeschlagen.</p>}
    </form>
  )
}
