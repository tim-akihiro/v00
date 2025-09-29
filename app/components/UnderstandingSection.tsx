"use client"

export default function UnderstandingSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Wir verstehen Sie Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-balance">Wir verstehen Sie.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item 01 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">01</span>
                <h3 className="text-xl font-semibold text-slate-800 text-balance">"Ich habe keine Zeit"</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Sie haben keine Kapazität, sich um alles zu kümmern.</p>
            </div>

            {/* Item 02 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">02</span>
                <h3 className="text-xl font-semibold text-slate-800 text-balance">
                  "Ich haben doch SEO machen lassen"
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">SEO sollte regelmäßig gepflegt werden.</p>
            </div>

            {/* Item 03 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">03</span>
                <h3 className="text-xl font-semibold text-slate-800 text-balance">
                  "Ich kenne mich mit sozialen Medien nicht aus."
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Soziale Medien leben von Aufmerksamkeit, aber benötigen diese auch.
              </p>
            </div>

            {/* Item 04 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">04</span>
                <h3 className="text-xl font-semibold text-slate-800 text-balance">
                  "Das kostet mich alles Geld. Ich brauche Kunden, keine Technik"
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Keine Kunden zu haben ist teurer, als in die Zukunft zu investieren.
              </p>
            </div>
          </div>
        </div>

        {/* Wir kümmern uns Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-balance">Wir kümmern uns.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-balance">Digitale Präsenz und Markenauftritt</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Einheitlicher Auftritt in Tagen, direkt von der Aufmerksamkeit profitieren.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Nutzen:</h4>
                <p className="text-blue-100 text-sm leading-relaxed">Höheres Vertrauen, qualifiziertere Anfragen.</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-balance">Trendanalysen und SEO / AI-SEO Inhalte</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Immer auf dem Laufenden, Anpassungen zur Optimierung.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Nutzen:</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Mehr Sichtbarkeit in KI Suchen und Google, planbarere Leads.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-balance">Soziale Netzwerk und Contentmanagement</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Redaktionsplan und einheitliche Vorlagen, schnellere Releases.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Nutzen:</h4>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Reichweite skaliert, konsistente Präsenz. Kundenanfragen aus neuen Kanälen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
