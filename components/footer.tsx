"use client"

import Link from "next/link"
import { Mail, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const navKeys = [
  { href: "/", key: "home" },
  { href: "/research", key: "research" },
  { href: "/members", key: "members" },
  { href: "/publications", key: "publications" },
  { href: "/lab-life", key: "labLife" },
  { href: "/for-students", key: "forStudents" },
  { href: "/access", key: "access" },
] as const

const relatedLinks = [
  { 
    href: "https://www.yokohama-cu.ac.jp/", 
    labelJa: "横浜市立大学", 
    labelEn: "Yokohama City University" 
  },
  { 
    href: "https://www.yokohama-cu.ac.jp/academics/grad/medicine/", 
    labelJa: "生命医科学研究科", 
    labelEn: "Graduate School of Medical Life Science" 
  },
  { 
    href: "https://www.mbsj.jp/", 
    labelJa: "日本分子生物学会", 
    labelEn: "MBSJ" 
  },
  { 
    href: "https://www.jscb.gr.jp/", 
    labelJa: "日本細胞生物学会", 
    labelEn: "JSCB" 
  },
  { 
    href: "https://pubmed.ncbi.nlm.nih.gov/", 
    labelJa: "PubMed", 
    labelEn: "PubMed" 
  },
  { 
    href: "https://researchmap.jp/", 
    labelJa: "researchmap", 
    labelEn: "researchmap" 
  },
]

export function Footer() {
  const { locale, t } = useLanguage()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Lab Info */}
          <div className="lg:col-span-2">
            <p className="text-xs text-background/60 mb-1">{t.header.university}</p>
            <h3 className="text-lg font-medium mb-4">{t.footer.labName}</h3>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {locale === "ja" 
                    ? "〒230-0045 神奈川県横浜市鶴見区末広町1-7-29"
                    : "1-7-29 Suehiro-cho, Tsurumi-ku, Yokohama 230-0045, Japan"
                  }
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:contact@example.ac.jp" className="hover:text-background transition-colors">
                  contact@example.ac.jp
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navKeys.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center group"
                >
                  <span className="relative">
                    {t.nav[item.key]}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-background/70 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Related Links */}
          <div>
            <h4 className="text-sm font-medium mb-4">
              {locale === "ja" ? "関連リンク" : "Related Links"}
            </h4>
            <nav className="flex flex-col gap-2">
              {relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="relative">
                    {locale === "ja" ? link.labelJa : link.labelEn}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-background/70 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © 2024 {t.footer.copyright}. All rights reserved.
            </p>
            <p className="text-xs text-background/40">
              {t.header.university}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
