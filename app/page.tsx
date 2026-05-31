import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ResearchOverview } from "@/components/research-overview"
import { LabLifeSection } from "@/components/lab-life-section"
import { NewsSection } from "@/components/news-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ResearchOverview />
        <LabLifeSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
