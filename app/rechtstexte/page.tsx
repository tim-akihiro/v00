"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import Header from "../components/Header"

export default function RechtstextePage() {
  const [expandedBoxes, setExpandedBoxes] = useState<{ [key: string]: boolean }>({
    impressum: false,
    datenschutz: false,
    agb: false,
    widerruf: false,
  })

  const toggleBox = (boxId: string) => {
    setExpandedBoxes((prev) => ({
      ...prev,
      [boxId]: !prev[boxId],
    }))
  }

  const legalBoxes = [
    {
      id: "impressum",
      title: "Impressum",
      placeholder: "Hier können Sie Ihre Impressum-Inhalte einfügen...",
    },
    {
      id: "datenschutz",
      title: "Datenschutzerklärung",
      placeholder: "Hier können Sie Ihre Datenschutzerklärung einfügen...",
    },
    {
      id: "agb",
      title: "Allgemeine Geschäftsbedingungen",
      placeholder: "Hier können Sie Ihre AGB einfügen...",
    },
    {
      id: "widerruf",
      title: "Widerrufsbelehrung",
      placeholder: "Hier können Sie Ihre Widerrufsbelehrung einfügen...",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rechtstexte</h1>
          <p className="text-lg text-gray-600">Alle wichtigen rechtlichen Informationen auf einen Blick</p>
        </div>

        <div className="space-y-6">
          {legalBoxes.map((box) => (
            <div
              key={box.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleBox(box.id)}
              >
                <h2 className="text-xl font-semibold text-gray-900">{box.title}</h2>
                <button
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200"
                  aria-label={expandedBoxes[box.id] ? "Zuklappen" : "Aufklappen"}
                >
                  {expandedBoxes[box.id] ? (
                    <ChevronUp className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedBoxes[box.id] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                      <p className="text-gray-500 italic">{box.placeholder}</p>
                      {/* Content area where user can add their legal texts */}
                      <div className="mt-4 space-y-4">
                        {/* Placeholder content structure */}
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600 font-medium">Diensteanbieter</p>
                          <p className="text-sm text-gray-500">[Hier Ihre Firmeninformationen einfügen]</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-gray-600 font-medium">Kontakt</p>
                          <p className="text-sm text-gray-500">[Hier Ihre Kontaktdaten einfügen]</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-gray-600 font-medium">Weitere Informationen</p>
                          <p className="text-sm text-gray-500">[Hier weitere rechtliche Informationen einfügen]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to home link */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Zurück zur Startseite
          </a>
        </div>
      </main>
    </div>
  )
}
