"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background1.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-blue-900/20" />

      <div className="relative z-10">
        <motion.header
          className="px-6 py-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex items-center justify-between" aria-label="Global">
            <div className="flex items-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-3 shadow-lg">
                <div className="flex items-center space-x-8">
                  <Link href="/" className="text-lg font-bold text-gray-900">
                    ADHS
                  </Link>
                  <div className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                      Startseite
                    </Link>
                    <Link
                      href="/leistungen"
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Leistungen
                    </Link>
                    <Link
                      href="/preise"
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Preise
                    </Link>
                    <Link
                      href="/kontakt"
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Kontakt
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="bg-white/90 backdrop-blur-sm rounded-full p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="block text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Startseite
                  </Link>
                  <Link
                    href="/leistungen"
                    className="block text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Leistungen
                  </Link>
                  <Link
                    href="/preise"
                    className="block text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Preise
                  </Link>
                  <Link
                    href="/kontakt"
                    className="block text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </motion.header>

        <div className="px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                KI. SEO. Google.
                <br />
                <span className="text-white/90">Leads</span>
              </h1>

              <div className="space-y-2 mb-12 text-lg md:text-xl text-white/90">
                <p>Effiziente Abläufe</p>
                <p>Automationen</p>
                <p>Mehr Zeit</p>
                <p>Mehr Kunden</p>
                <p>Mehr Umsätze</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Termin kostenlos buchen
                </motion.button>
                <motion.button
                  className="bg-purple-400 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Alle Leistungen
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
