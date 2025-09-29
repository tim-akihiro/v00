import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

import { Inter, Geist, Geist_Mono, Source_Serif_4 } from "next/font/google"

const geistSans = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const sourceSerif = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-source-serif",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Webseiten, Automatisierung für dein KMU | Für die digitale Zukunft | Tim Akihiro Heinrich ",
  description:
    "Strategische Beratung zur Digitalisierung ihres Unternehmens. Terminvergabe, soziale Medien und Leadgeneration automatisieren. Für die Zukunft heute digitalisieren und neue Märkte erschließen.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable}`}
    >
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
