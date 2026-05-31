"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/members", label: "Members" },
  { href: "/publications", label: "Publications" },
  { href: "/lab-life", label: "Lab Life" },
  { href: "/for-students", label: "For Students" },
  { href: "/access", label: "Access" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xs text-muted-foreground">横浜市立大学</span>
            <span className="text-sm lg:text-base font-medium text-foreground">
              生体機能医科学研究室
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
