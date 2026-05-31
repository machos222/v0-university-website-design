"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale, t } = useLanguage()

  // Scroll detection for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if current path matches nav item
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
              {t.header.university}
            </span>
            <span className="text-sm lg:text-base font-medium text-foreground group-hover:text-primary transition-colors">
              {t.header.labName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm transition-colors group ${
                  isActive(item.href)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t.nav[item.key]}
                {/* Underline animation */}
                <span 
                  className={`absolute bottom-0 left-3 right-3 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    isActive(item.href) 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="ml-4 pl-4 border-l border-border flex items-center">
              <button
                onClick={() => setLocale("ja")}
                className={`text-sm px-2 py-1 transition-colors hover:text-primary ${
                  locale === "ja"
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
                aria-label="日本語に切り替え"
              >
                日本語
              </button>
              <span className="text-muted-foreground/50 mx-1">|</span>
              <button
                onClick={() => setLocale("en")}
                className={`text-sm px-2 py-1 transition-colors hover:text-primary ${
                  locale === "en"
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
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
                  className={`px-4 py-3 text-sm rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5 font-medium border-l-2 border-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary"
                  }`}
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
