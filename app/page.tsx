import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-16">
      {/* Nav */}
      <nav className="text-sm flex gap-6">
        <a href="#start">Startseite</a>
        <a href="#leistungen">Leistungen</a>
        <a href="#preise">Preise</a>
        <a href="#kontakt">Kontakt</a>
      </nav>

      {/* Hero */}
      <section id="start" className="space-y-4">
        <h1 className="text-3xl font-bold">
          Umsätze erhöhen. <br />Weniger Stress durch effiziente Automationen.
        </h1>
        <p>Die digitale Welt dreht sich rasant. Wer in Zukunft weiter existieren möchte, muss sichtbar bleiben. Reichweite und Effizienz sind die neue Währung der Zukunft.</p>
        <p>Weniger nutzen Google und verlassen sich auf KI-Suchen. Dort werden in der Regel nur die Top&nbsp;5 Ergebnisse angezeigt.</p>
        <p>Viele fühlen sich verunsichert und handeln nicht rechtzeitig. Wir verstehen Sie und beraten Sie gerne. Unser Angebot zielt darauf, Ihnen repetitive Aufgaben abzunehmen.</p>
      </section>

      {/* Nutzen-Kacheln */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Vertrauen</h3>
          <p className="mt-2">Vertrauen den Antworten von KI bereits heute mehr als Google… <strong>41&nbsp;%</strong></p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Fokus</h3>
          <p className="mt-2">Widmen Sie Ihre Zeit nicht den Kleinigkeiten des Alltags. <strong>Behalten Sie Ihren Fokus.</strong></p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Steuerbarkeit</h3>
          <p className="mt-2">Nehmen Sie das Ruder wieder in die Hand. Richtung Zukunft.</p>
        </div>
      </section>

      {/* Marktinfo */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Rückgang des Google-Suchvolumens Anfang 2027</h2>
        <p>ca. <strong>26&nbsp;%</strong></p>
      </section>

      {/* Einwände */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Wir verstehen Sie.</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Ich habe keine Zeit.</h3>
            <p className="mt-2">Sie haben keine Zeit oder Kapazitäten, sich um alles zu kümmern.</p>
            <h3 className="mt-4 font-semibold">Ich habe doch SEO machen lassen.</h3>
            <p className="mt-2">Natürlich, das Tagesgeschäft geht vor. Doch SEO sollte regelmäßig gepflegt werden.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Ich kenne mich mit sozialen Medien nicht aus.</h3>
            <p className="mt-2">Soziale Medien leben von Aufmerksamkeit, benötigen diese deshalb aber auch.</p>
            <h3 className="mt-4 font-semibold">Das kostet mich alles Geld. Ich brauche Kunden, keine Technik.</h3>
            <p className="mt-2">Keine Kunden zu haben ist teurer, als in die Zukunft zu investieren.</p>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="space-y-6">
        <h2 className="text-2xl font-bold">Wir kümmern uns.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Digitale Positionierung Ihrer Marke und Präsenz</h3>
            <p className="mt-2">Einheitlicher Auftritt in Tagen und direkt von der Aufmerksamkeit profitieren.</p>
            <p className="mt-2"><strong>Nutzen:</strong> Höheres Vertrauen, qualifiziertere Anfragen.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Lösungsorientierte Beratung</h3>
            <p className="mt-2">Wir kümmern uns um Ihre digitale Infrastruktur. Sie kümmern sich um das Geschäft.</p>
            <p className="mt-2"><strong>Nutzen:</strong> Keine Zeitverschwendung mit Dingen, die Sie nicht voranbringen.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Skalierung Ihres Unternehmens</h3>
            <p className="mt-2">Ob Lead Generation, Content Erstellung oder Diversifikation der Absatzkanäle.</p>
            <p className="mt-2"><strong>Nutzen:</strong> Reichweite skaliert, Kundenanfragen aus neuen Kanälen, mehr Umsatz.</p>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="space-y-6">
        <h2 className="text-2xl font-bold">Ihre Positionierung. Preise.</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-semibold">Webseiten Audit — <strong>0&nbsp;€</strong></h3>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Ladegeschwindigkeit</li><li>Sicherheitsaspekte</li><li>Lesbarkeit für KI und KI-SEO</li>
              <li>SEO technisch / inhaltlich</li><li>Cookie, Impressum, DSGVO</li>
              <li>Zusammenfassung, Handlungsempfehlungen, Nachbesprechung</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-semibold">1-Seite Landingpage — <strong>400&nbsp;€</strong></h3>
            <p className="mt-2">In 5 Tagen fertig. Domain nach Wunsch. Basic SEO. 1 Korrekturrunde.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>1 Seite, 5 Sektionen</li><li>Cookies, Impressum, DSGVO</li>
              <li>Deployment auf Custom Domain mit SSL</li>
              <li>Backup & Audit monatlich, Änderungen 1×/Monat</li>
              <li>monatl. 10&nbsp;€ Service-Gebühr</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-semibold">3-Seiten Landingpage — <strong>600&nbsp;€</strong></h3>
            <p className="mt-2">In 7 Tagen fertig. Domain nach Wunsch. SEO und Basic KI-SEO. 2 Korrekturrunden.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>3 Seiten, je 4 Sektionen</li><li>Cookies, Impressum, DSGVO</li>
              <li>Deployment auf Custom Domain mit SSL</li>
              <li>Backup & Audit monatlich, Änderungen 2×/Monat</li>
              <li>monatl. 10&nbsp;€ Service-Gebühr</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Automationen */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Effiziente Automationen. Aus wenig mehr machen.</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-semibold">Beratungsgespräch — <strong>0&nbsp;€</strong></h3>
            <p className="mt-2">Wir evaluieren Abläufe, Umsatzkanäle und das Potential von Automatisierungen.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Chatbots, Lead Generation, Forderungsmanagement</li>
              <li>Markt- und Kundenanalysen, Diversifizierung</li>
              <li>Erschließung neuer Absatzmöglichkeiten</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-semibold">Automation „Trends“ — <strong>250&nbsp;€</strong></h3>
            <p className="mt-2">Trendanalyse und Keyword-Tracking. Ergebnisse wöchentlich per Mail.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Zielgruppen besser erreichen, Top SEO, qualifiziertere Leads</li>
              <li>Umsatzprognostik, 3 Std. Service/Monat</li>
              <li>Anpassung der Keywords 1×/Monat</li>
              <li>monatl. 30&nbsp;€ Service-Gebühr</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-semibold">Automation „Content“ — <strong>400&nbsp;€</strong></h3>
            <p className="mt-2">Auf Basis „Trends“ werden 8 Posts/Monat erstellt und plattformübergreifend geteilt.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Schnell Reichweite steigern, Markterschließung</li>
              <li>Origineller, nischenspezifischer Content</li>
              <li>IG, FB, X, Blog; optional mit finaler Bestätigung</li>
              <li>4 Std. Service/Monat, monatl. 50&nbsp;€ Service-Gebühr</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Garantien */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Garantien</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Zufriedenheit:</strong> Rückerstattung bis zu 14 Tage, auch nach Abnahme.</li>
          <li><strong>Benutzerfreundlich:</strong> Sie bekommen Ergebnisse, keine Programme.</li>
          <li><strong>Erfolg:</strong> Bleibt das gewünschte Ergebnis aus, Kaufpreis zurück.</li>
          <li><strong>Dienstausfall:</strong> Fällt ein Dienst &gt;12&nbsp;Stunden aus, 1 Monatsgebühr erstattet.</li>
        </ul>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="space-y-4">
        <h2 className="text-2xl font-bold">Kontaktformular</h2>
        <p>Dies ermöglicht uns eine strukturierte Bearbeitung aller Anfragen.</p>
        <ContactForm />
      </section>

      {/* Rechtliches */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Rechtliches</h2>
        <ul className="list-disc pl-5">
          <li><a href="/rechtstexte#impressum">Impressum</a></li>
          <li><a href="/rechtstexte#datenschutz">Datenschutz</a></li>
          <li><a href="/rechtstexte#cookies">Cookies</a></li>
          <li><a href="/rechtstexte#agb">AGB</a></li>
        </ul>
      </section>
    </main>
  );
}
