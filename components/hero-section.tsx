"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 lg:pt-20">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-microtubule.png"
          alt="微小管の蛍光顕微鏡画像"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
            {t.hero.subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 whitespace-pre-line text-balance">
            {t.hero.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.hero.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/research">
                {t.hero.researchButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/for-students">
                {t.hero.contactButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-wider">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
