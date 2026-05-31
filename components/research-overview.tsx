"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

export function ResearchOverview() {
  const { locale, t } = useLanguage()

  const researchTopics = [
    {
      titleJa: "微小管ダイナミクス",
      titleEn: "Microtubule Dynamics",
      descriptionJa: "微小管の重合・脱重合メカニズムの解明と、細胞分裂における役割の研究",
      descriptionEn: "Elucidating microtubule polymerization/depolymerization mechanisms and their role in cell division",
      image: "/images/research-microtubule.jpg",
    },
    {
      titleJa: "モータータンパク質",
      titleEn: "Motor Proteins",
      descriptionJa: "キネシン・ダイニンの構造と運動メカニズムの分子レベルでの解析",
      descriptionEn: "Molecular-level analysis of kinesin and dynein structure and motility mechanisms",
      image: "/images/research-motor.jpg",
    },
    {
      titleJa: "クライオ電子顕微鏡",
      titleEn: "Cryo-Electron Microscopy",
      descriptionJa: "最先端のクライオEM技術を用いた高分解能構造解析",
      descriptionEn: "High-resolution structural analysis using state-of-the-art cryo-EM technology",
      image: "/images/research-cryoem.jpg",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              {t.research.subtitle}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t.research.title}
            </h2>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {t.research.moreButton}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchTopics.map((topic, index) => (
            <Card key={index} className="bg-card hover:shadow-md transition-shadow overflow-hidden group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={topic.image}
                  alt={locale === "ja" ? topic.titleJa : topic.titleEn}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Placeholder overlay - remove when real images are added */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <span className="text-sm text-foreground/60 bg-background/80 px-3 py-1 rounded-full">
                    Image
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  {locale === "ja" ? topic.titleJa : topic.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {locale === "ja" ? topic.descriptionJa : topic.descriptionEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
