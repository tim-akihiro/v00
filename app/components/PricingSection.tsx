"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const packages = [
  {
    title: "Webseiten Audit",
    price: "0 €",
    description: "Evaluierung des bestehenden Webauftritts. Webshops werden nicht analysiert.",
    buttonText: "Kostenlos",
    buttonVariant: "outline" as const,
    features: [
      "Ladegeschwindigkeit",
      "Sicherheitsaspekte",
      "Lesbarkeit für KI",
      "SEO Technisch",
      "SEO Inhaltlich",
      "Cookie, Impressum, DSGVO",
      "Zusammenfassung der Ergebnisse",
      "Handlungsempfehlungen",
    ],
  },
  {
    title: "Erstellung deiner Webseite 1-Seiten Landingpage",
    price: "300 €",
    description:
      "In 7 Tagen ist die Webseite fertig. Diese läuft dann unter der gewünschten Domain, z.B. www.meinewunschseite.de",
    buttonText: "Bestellen",
    buttonVariant: "default" as const,
    features: [
      "Individuell nach Wunsch",
      "1 Seite in 5 Sektionen",
      "Cookies, Impressum, DSGVO inkl.",
      "3 Korrekturen vor Abnahme",
      "SEO / KI SEO Content inkl.",
      "Deployment auf Custom Domain mit SSL",
      "Backups monatlich",
      "Änderungen 1+ pro Monat",
    ],
  },
  {
    title: "Erstellung deiner Webseite 3-Seiten Landingpage",
    price: "600 €",
    description:
      "In 10 Tagen ist die Webseite fertig. Diese läuft dann unter der gewünschten Domain, z.B. www.meinewunschseite.de",
    buttonText: "Bestellen",
    buttonVariant: "default" as const,
    features: [
      "Individuell nach Wunsch",
      "3 Seiten in 5 Sektionen",
      "Cookies, Impressum, DSGVO inkl.",
      "4 Korrekturen vor Abnahme",
      "SEO / KI SEO Content inkl.",
      "Deployment auf Custom Domain mit SSL",
      "Backups monatlich",
      "Änderungen 2+ pro Monat",
    ],
  },
  {
    title: "E-Commerce Webshop Basis",
    price: "1200 €",
    description: "In 14 Tagen ist der Webshop fertig. Inklusive Zahlungsabwicklung und Produktverwaltung.",
    buttonText: "Bestellen",
    buttonVariant: "default" as const,
    features: [
      "Bis zu 50 Produkte",
      "Zahlungsabwicklung (Stripe/PayPal)",
      "Produktverwaltung",
      "Bestellverwaltung",
      "SEO / KI SEO Content inkl.",
      "SSL Zertifikat inklusive",
      "Backups wöchentlich",
      "Support 3 Monate inklusive",
    ],
  },
  {
    title: "SEO & Content Marketing Paket",
    price: "800 €",
    description: "Monatliches SEO-Paket für bestehende Webseiten. Kontinuierliche Optimierung und Content-Erstellung.",
    buttonText: "Bestellen",
    buttonVariant: "default" as const,
    features: [
      "Keyword-Recherche & Analyse",
      "4 SEO-optimierte Artikel/Monat",
      "KI-gestützte Content-Erstellung",
      "Technische SEO-Optimierung",
      "Backlink-Aufbau",
      "Monatliche Ranking-Reports",
      "Google Analytics Setup",
      "Laufzeit: 6 Monate minimum",
    ],
  },
  {
    title: "Premium Business Paket",
    price: "2500 €",
    description: "Komplettlösung für Unternehmen. Webseite, SEO, Social Media und laufende Betreuung.",
    buttonText: "Bestellen",
    buttonVariant: "default" as const,
    features: [
      "Multi-Page Webseite (bis 10 Seiten)",
      "E-Commerce Integration",
      "Social Media Setup",
      "Google Ads Kampagne Setup",
      "Monatliche SEO-Betreuung",
      "Content-Erstellung (8 Posts/Monat)",
      "Analytics & Reporting",
      "12 Monate Support inklusive",
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Unsere Pakete.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Die professionelle Positionierung ist der größte Hebel für die Zukunft.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Package Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 min-h-[3rem] flex items-center">
                  {pkg.title}
                </h3>
                <div className="text-3xl font-bold text-slate-800 mb-4">{pkg.price}</div>
                <p className="text-sm text-slate-600 leading-relaxed min-h-[4rem]">{pkg.description}</p>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  pkg.buttonVariant === "outline"
                    ? "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
                    : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                }`}
                variant={pkg.buttonVariant}
              >
                {pkg.buttonText} →
              </Button>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Features List */}
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
