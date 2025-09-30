import Hero from "./components/Hero"
import InteractiveGridSection from "./components/InteractiveGridSection"
import UnderstandingSection from "./components/UnderstandingSection"
import PricingSection from "./components/PricingSection"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Marquee from "./components/Marquee"
import Contact from "./components/Contact"
import NewsletterSubscribe from "./components/NewsletterSubscribe"

export default function Home() {
  return (
    <>
      <Hero />
      <InteractiveGridSection />
      <UnderstandingSection />
      <PricingSection />
      <FeatureCarousel />
      <PortfolioGrid />
      <Marquee />
      <Contact />
      <NewsletterSubscribe />
    </>
  )
}
