import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 })
    }
    const r = await fetch(process.env.N8N_CONTACT_WEBHOOK as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "website", ts: new Date().toISOString() }),
    })
    if (!r.ok) return NextResponse.json({ ok: false }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
