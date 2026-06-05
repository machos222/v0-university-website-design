"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, GraduationCap, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function CTASection() {
  const { locale, t } = useLanguage()

  return (
    <section className="py-14 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-foreground/10 rounded-full text-sm mb-4">
              <GraduationCap className="h-4 w-4" />
              <span>{t.cta.subtitle}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-balance">
              {locale === "ja" ? (
                <>一緒に生命の謎を<br className="hidden sm:block" />解き明かしませんか？</>
              ) : (
                <>Join us in unraveling<br className="hidden sm:block" />the mysteries of life</>
              )}
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-5">
              {t.cta.description}
            </p>
            <ul className="space-y-2 mb-6 text-primary-foreground/90">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                {t.cta.targets.doctoral}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                {t.cta.targets.master}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                {t.cta.targets.undergraduate}
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/for-students">
                  {t.cta.detailButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/access">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.footer.contact}
                </Link>
              </Button>
            </div>
          </div>

          {/* Lab photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/lab-group.jpg"
                alt={locale === "ja" ? "研究室メンバーの集合写真" : "Lab group photo"}
                fill
                className="object-cover"
              />
              {/* Placeholder overlay - remove when real images are added */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
                <span className="text-sm text-white bg-foreground/30 px-4 py-2 rounded-full">
                  {locale === "ja" ? "研究室メンバー集合写真" : "Lab Group Photo"}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground p-3 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">
                {locale === "ja" ? "在籍メンバー" : "Members"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
