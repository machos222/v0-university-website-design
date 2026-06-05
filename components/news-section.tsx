"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const newsJa = [
  {
    date: "2024.12.15",
    category: "論文",
    categoryEn: "Paper",
    title: "微小管-キネシン複合体の新構造を解明した論文がNature誌に掲載されました",
    titleEn: "Our paper on the new structure of microtubule-kinesin complex was published in Nature",
  },
  {
    date: "2024.11.20",
    category: "受賞",
    categoryEn: "Award",
    title: "山田太郎（D3）が日本生化学会若手優秀発表賞を受賞しました",
    titleEn: "Taro Yamada (D3) received the Young Investigator Award at JSB",
  },
  {
    date: "2024.10.05",
    category: "イベント",
    categoryEn: "Event",
    title: "研究室オープンラボを開催します（11月15日）",
    titleEn: "Lab Open House scheduled for November 15th",
  },
  {
    date: "2024.09.18",
    category: "メンバー",
    categoryEn: "Member",
    title: "新メンバー2名が加わりました",
    titleEn: "Two new members have joined our lab",
  },
]

export function NewsSection() {
  const { locale, t } = useLanguage()

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              {t.news.subtitle}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t.news.title}
            </h2>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {newsJa.map((item, index) => (
            <article 
              key={index} 
              className="py-5 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex items-center gap-3 shrink-0">
                  <time className="text-sm text-muted-foreground font-mono">
                    {item.date}
                  </time>
                  <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">
                    {locale === "ja" ? item.category : item.categoryEn}
                  </span>
                </div>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  {locale === "ja" ? item.title : item.titleEn}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <Link
            href="/publications"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {t.news.moreButton}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
