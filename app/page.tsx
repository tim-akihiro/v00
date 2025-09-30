// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import GlassNavbar from "@/components/GlassNavbar";
import ContactForm from "@/components/ContactForm";

const LiquidEther = dynamic(() => import("@/components/reactbits/LiquidEther"), { ssr: false });

export default function Home() {
  return (
    <>
      <GlassNavbar />

      {/* Vollbild-Hero mit ReactBits */}
      <section id="start" className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <LiquidEther />
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Ihre digitale Präsenz. Klar. Messbar. Wirksam.
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Die digitale Welt dreht sich rasant. Wir priorisieren, automatisieren und liefern.
          </p>
        </div>
      </section>

      {/* Vertrauen / Fokus / Tempo in Farbkarten */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-12 md:grid-cols-3">
        <div className="rounded-2xl p-6 text-white bg-emerald-600">Vertrauen</div>
        <div className="rounded-2xl p-6 text-white bg-indigo-600">Fokus</div>
        <div className="rounded-2xl p-6 text-white bg-rose-600">Tempo</div>
      </section>

      {/* Wir verstehen Sie – 4 farbige Boxen */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-semibold">Wir verstehen Sie</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow">KMU-Alltag: wenig Zeit</div>
          <div className="rounded-2xl bg-slate-50 p-5 shadow">Budget muss wirken</div>
          <div className="rounded-2xl bg-white p-5 shadow">Planbar statt Chaos</div>
          <div className="rounded-2xl bg-slate-50 p-5 shadow">Ein Ansprechpartner</div>
        </div>
      </section>

      {/* Hauptinhalt */}
      <main className="mx-auto max-w-6xl px-6 pb-20 space-y-16">
        {/* Kurzclaim */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            Umsätze erhöhen. <br />Weniger Stress durch effiziente Automationen.
          </h2>
          <p>Wer sichtbar bleiben will, braucht Reichweite und Effizienz. Wir nehmen Last vom Tisch.</p>
        </section>

        {/* Marktinfo */}
        <section className="space-y-2">
          <h3 className="text-2xl font-bold">Rückgang des Google-Suchvolumens Anfang 2027</h3>
          <p>ca. <strong>26&nbsp;%</strong></p>
        </section>

        {/* Einwände */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold">Wir verstehen Sie.</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="font-semibold">Ich habe keine Zeit.</h4>
              <p className="mt-2">Sie haben keine Kapazitäten, sich um alles zu kümmern.</p>
              <h4 className="mt-4 font-semibold">Ich habe doch SEO machen lassen.</h4>
              <p className="mt-2">SEO ist Pflegearbeit. Wir halten es aktuell.</p>
            </div>
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="font-semibold">Ich kenne mich mit sozialen Medien nicht aus.</h4>
              <p className="mt-2">Wir liefern System statt Zufall.</p>
              <h4 className="mt-4 font-semibold">Das kostet Geld. Ich brauche Kunden.</h4>
              <p className="mt-2">Keine Kunden ist teurer. Wir priorisieren auf Ergebnis.</p>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="space-y-6">
          <h3 className="text-2xl font-bold">Wir kümmern uns.</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="font-semibold">Digitale Positionierung</h4>
              <p className="mt-2">Einheitlicher Auftritt in Tagen.</p>
              <p className="mt-2"><strong>Nutzen:</strong> Vertrauen, qualifizierte Anfragen.</p>
            </div>
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="font-semibold">Lösungsorientierte Beratung</h4>
              <p className="mt-2">Wir managen die Infrastruktur.</p>
              <p className="mt-2"><strong>Nutzen:</strong> Zeitersparnis.</p>
            </div>
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="font-semibold">Skalierung</h4>
              <p className="mt-2">Leads, Content, Kanäle.</p>
              <p className="mt-2"><strong>Nutzen:</strong> Mehr Reichweite, mehr Umsatz.</p>
            </div>
          </div>
        </section>

        {/* Preise */}
        <section id="preise" className="space-y-6">
          <h3 className="text-2xl font-bold">Ihre Positionierung. Preise.</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="text-lg font-semibold">Webseiten Audit — <strong>0&nbsp;€</strong></h4>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Ladegeschwindigkeit</li><li>Sicherheit</li><li>KI-Lesbarkeit</li>
                <li>SEO</li><li>Cookie, Impressum, DSGVO</li>
                <li>Empfehlungen + Nachbesprechung</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="text-lg font-semibold">1-Seite Landingpage — <strong>400&nbsp;€</strong></h4>
              <p className="mt-2">In 5 Tagen. Domain, Basic SEO, 1 Korrektur.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>1 Seite, 5 Sektionen</li><li>Impressum, DSGVO</li>
                <li>Custom Domain + SSL</li>
                <li>Backup & Audit monatlich</li>
                <li>Service: 10&nbsp;€/Monat</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl bg-white md:col-span-2">
              <h4 className="text-lg font-semibold">3-Seiten Landingpage — <strong>600&nbsp;€</strong></h4>
              <p className="mt-2">In 7 Tagen. SEO + Basic KI-SEO. 2 Korrekturen.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>3 Seiten, je 4 Sektionen</li><li>Impressum, DSGVO</li>
                <li>Custom Domain + SSL</li>
                <li>Backup & Audit monatlich</li>
                <li>Service: 10&nbsp;€/Monat</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Automationen */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Effiziente Automationen.</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="text-lg font-semibold">Beratungsgespräch — <strong>0&nbsp;€</strong></h4>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Prozesse, Kanäle, Potenzial</li>
                <li>Leadgen, Forderungsmanagement</li>
                <li>Markt- und Kundenanalyse</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl bg-white">
              <h4 className="text-lg font-semibold">Automation „Trends“ — <strong>250&nbsp;€</strong></h4>
              <p className="mt-2">Wöchentliche Trend- und Keyword-Insights per Mail.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Bessere Zielgruppenansprache</li>
                <li>3 Std. Service/Monat</li>
                <li>Keyword-Update 1×/Monat</li>
                <li>Service: 30&nbsp;€/Monat</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl bg-white md:col-span-2">
              <h4 className="text-lg font-semibold">Automation „Content“ — <strong>400&nbsp;€</strong></h4>
              <p className="mt-2">8 Posts/Monat. Cross-Posting optional mit Freigabe.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Reichweite steigern</li>
                <li>Origineller, nischiger Content</li>
                <li>IG, FB, X, Blog</li>
                <li>4 Std. Service/Monat • Service: 50&nbsp;€/Monat</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Garantien */}
        <section className="space-y-2">
          <h3 className="text-2xl font-bold">Garantien</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Zufriedenheit:</strong> 14 Tage Rückerstattung, auch nach Abnahme.</li>
            <li><strong>Benutzerfreundlich:</strong> Ergebnisse, keine Programme.</li>
            <li><strong>Erfolg:</strong> Falls Ziel verfehlt, Kaufpreis zurück.</li>
            <li><strong>Dienstausfall:</strong> &gt;12&nbsp;h Ausfall → 1 Monatsgebühr erstattet.</li>
          </ul>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="space-y-4">
          <h3 className="text-2xl font-bold">Kontaktformular</h3>
          <p>Strukturierte Bearbeitung aller Anfragen.</p>
          <ContactForm />
        </section>

        {/* Rechtliches */}
        <section className="space-y-2">
          <h3 className="text-xl font-semibold">Rechtliches</h3>
          <ul className="list-disc pl-5">
            <li><a href="/rechtstexte#impressum">Impressum</a></li>
            <li><a href="/rechtstexte#datenschutz">Datenschutz</a></li>
            <li><a href="/rechtstexte#cookies">Cookies</a></li>
            <li><a href="/rechtstexte#agb">AGB</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
