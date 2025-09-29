"use client"

import { motion } from "framer-motion"
import LiquidEther from "./LiquidEther"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Flüssigkeitsanimation als Hintergrund */}
      <LiquidEther className="absolute inset-0 -z-10" />

      {/* Inhalt */}
      <div className="relative z-10 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="mt-10 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Tim Akihiro Heinrich</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Strategische Beratung zur Digitalisierung Ihres Unternehmens
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Zerbrechen Sie sich nicht den Kopf. Das mache ich für Sie.
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
