"use client"

import { useState } from "react"
import Image from "next/image"

export default function InteractiveGridSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background blur overlay when hovering */}
      <div
        className={`absolute inset-0 bg-white/20 backdrop-blur-sm transition-opacity duration-300 pointer-events-none ${
          hoveredCard !== null ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header text */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-gray-700">
          <div>
            <p className="text-lg leading-relaxed">
              Die digitale Welt dreht sich rasant.
              <br />
              Wer in der Zukunft weiter existieren möchte, muss sichtbar bleiben.
              <br />
              Aufmerksamkeit und eine starke Marke sind die neue Währung im digitalen Raum.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Weniger nutzen Google und verlassen sich auf KI-Suchen.
              <br />
              Dort werden in der Regel nur die Top 5 Ergebnisse angezeigt.
              <br />
              Viele fühlen sich verunsichert und handeln nicht rechtzeitig. 
            </p>
          </div>
        </div>

        {/* Interactive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Card 1 - Energie tanken */}
          <div
            className={`bg-blue-100 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
              hoveredCard === 1
                ? "shadow-2xl scale-105 z-20"
                : hoveredCard !== null
                  ? "opacity-50"
                  : "shadow-lg hover:shadow-xl"
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Keine Sorge, Sie sind nicht allein. Gerne berate und begleite ich Sie in dem Prozess, die neue digitale Landschaft zu erobern.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Energie</h3>
              <h3 className="text-4xl font-bold text-gray-800">tanken</h3>
            </div>
          </div>

          {/* Card 2 - Car charging image */}
          <div
            className={`bg-gray-200 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
              hoveredCard === 2
                ? "shadow-2xl scale-105 z-20"
                : hoveredCard !== null
                  ? "opacity-50"
                  : "shadow-lg hover:shadow-xl"
            }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full relative">
              <Image src="/electric-car-charging-station-blue-cable.jpg" alt="Electric car charging" fill className="object-cover" />
            </div>
          </div>

          {/* Card 3 - 41% statistic */}
          <div
            className={`bg-gray-200 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
              hoveredCard === 3
                ? "shadow-2xl scale-105 z-20"
                : hoveredCard !== null
                  ? "opacity-50"
                  : "shadow-lg hover:shadow-xl"
            }`}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <p className="text-sm text-gray-600 mb-8">
                Vertrauen den Antworten von LLMs heute schon mehr als Google...
              </p>
            </div>
            <div>
              <span className="text-6xl font-bold text-blue-600">41%</span>
            </div>
          </div>

          {/* Card 4 - 100% focus */}
          <div
            className={`bg-purple-400 rounded-3xl p-8 flex flex-col justify-between text-white transition-all duration-300 cursor-pointer ${
              hoveredCard === 4
                ? "shadow-2xl scale-105 z-20"
                : hoveredCard !== null
                  ? "opacity-50"
                  : "shadow-lg hover:shadow-xl"
            }`}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <p className="text-sm mb-4">Widmen Sie Ihre Zeit nicht den Kleinigkeiten des Alltags.</p>
              <p className="text-sm mb-8">Behalten Sie Ihren Fokus. Ich kümmere mich um das Repetetive.</p>
            </div>
            <div>
              <span className="text-6xl font-bold">100%</span>
            </div>
          </div>

          {/* Card 5 - Center text */}
          <div
            className={`bg-white rounded-3xl p-8 flex items-center justify-center transition-all duration-300 cursor-pointer ${
              hoveredCard === 5
                ? "shadow-2xl scale-105 z-20"
                : hoveredCard !== null
                  ? "opacity-50"
                  : "shadow-lg hover:shadow-xl"
            }`}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Nehmen Sie das Ruder wieder in die Hand.</p>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Richtung</h3>
              <h3 className="text-4xl font-bold text-gray-800">Zukunft.</h3>
            </div>
          </div>

          {/* Card 6 - 26% statistic */}
          <div
            className={`bg-purple-400 rounded-3xl p-8 flex flex-col justify-between text-white transition-all duration-300 cursor-pointer ${
              hoveredCard === 6
                ? "shadow-2xl scale-105 z-20"
                : hoveredCard !== null
                  ? "opacity-50"
                  : "shadow-lg hover:shadow-xl"
            }`}
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <p className="text-sm mb-8">Rückgang des Google Suchvolumen bis 2027</p>
            </div>
            <div>
              <span className="text-6xl font-bold">26%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
