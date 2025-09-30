import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // OPTIONAL: an n8n weiterleiten
    // if (!process.env.N8N_WEBHOOK_URL) throw new Error("N8N_WEBHOOK_URL missing");
    // await fetch(process.env.N8N_WEBHOOK_URL, {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    console.log("CONTACT_FORM", data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_FORM_ERROR", err);
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }
}
