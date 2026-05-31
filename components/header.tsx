"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xs text-muted-foreground">{t.header.university}</span>
            <span className="text-sm lg:text-base font-medium text-foreground">
              {t.header.labName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="ml-4 pl-4 border-l border-border flex items-center">
              <button
                onClick={() => setLocale("ja")}
                className={`text-sm px-2 py-1 transition-colors ${
                  locale === "ja"
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="日本語に切り替え"
              >
                日本語
              </button>
              <span className="text-muted-foreground/50 mx-1">|</span>
              <button
                onClick={() => setLocale("en")}
                className={`text-sm px-2 py-1 transition-colors ${
                  locale === "en"
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Switch to English"
              >
                English
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center text-xs">
              <button
                onClick={() => setLocale("ja")}
                className={`px-1.5 py-1 transition-colors ${
                  locale === "ja"
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                JP
              </button>
              <span className="text-muted-foreground/50">|</span>
              <button
                onClick={() => setLocale("en")}
                className={`px-1.5 py-1 transition-colors ${
                  locale === "en"
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t.header.openMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navKeys.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
