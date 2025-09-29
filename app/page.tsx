import Hero from "./components/Hero"
import InteractiveGridSection from "./components/InteractiveGridSection"
import UnderstandingSection from "./components/UnderstandingSection"
import PricingSection from "./components/PricingSection"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
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
      <WearYourStory />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <Contact />
      <NewsletterSubscribe />
    </>
  )
}
