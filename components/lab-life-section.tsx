"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, PartyPopper } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

const photos = [
  { src: "/images/lab-life-1.jpg", alt: "論文ゼミの様子", captionJa: "論文ゼミ", captionEn: "Journal Club" },
  { src: "/images/lab-life-2.jpg", alt: "実験の様子", captionJa: "実験風景", captionEn: "Experiments" },
  { src: "/images/lab-life-3.jpg", alt: "研究室のミーティング", captionJa: "ディスカッション", captionEn: "Discussion" },
  { src: "/images/lab-life-4.jpg", alt: "歓迎会の様子", captionJa: "歓迎会", captionEn: "Welcome Party" },
  { src: "/images/lab-life-5.jpg", alt: "学会発表", captionJa: "学会発表", captionEn: "Conference" },
  { src: "/images/lab-life-6.jpg", alt: "忘年会の様子", captionJa: "忘年会", captionEn: "Year-end Party" },
]

export function LabLifeSection() {
  const { locale, t } = useLanguage()

  const activities = [
    {
      icon: BookOpen,
      title: t.labLife.events.seminar.title,
      schedule: t.labLife.events.seminar.day,
      description: t.labLife.events.seminar.description,
    },
    {
      icon: FileText,
      title: t.labLife.events.report.title,
      schedule: t.labLife.events.report.day,
      description: t.labLife.events.report.description,
    },
    {
      icon: PartyPopper,
      title: locale === "ja" ? "イベント" : "Events",
      schedule: locale === "ja" ? "年間を通じて" : "Throughout the year",
      description: locale === "ja" 
        ? "歓迎会、忘年会、卒業祝いなど"
        : "Welcome party, year-end party, graduation celebration",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              {t.labLife.subtitle}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.labLife.title}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {locale === "ja" 
                ? "研究だけでなく、メンバー同士の交流も大切にしています"
                : "We value not only research but also interaction among members"
              }
            </p>
          </div>
          <Link
            href="/lab-life"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {locale === "ja" ? "詳しく見る" : "Learn more"}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Weekly Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <activity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{activity.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{activity.schedule}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">
                  {locale === "ja" ? photo.captionJa : photo.captionEn}
                </p>
              </div>
              {/* Placeholder overlay - remove when real images are added */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-sm text-foreground/60 bg-background/80 px-3 py-1 rounded-full">
                  {locale === "ja" ? photo.captionJa : photo.captionEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
