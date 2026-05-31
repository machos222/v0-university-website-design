"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
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

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navKeys.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">&nbsp;</h4>
            <nav className="flex flex-col gap-2">
              {navKeys.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t.nav[item.key]}
                </Link>
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
