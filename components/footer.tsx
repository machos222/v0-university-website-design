import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/members", label: "Members" },
  { href: "/publications", label: "Publications" },
  { href: "/lab-life", label: "Lab Life" },
  { href: "/for-students", label: "For Students" },
  { href: "/access", label: "Access" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Lab Info */}
          <div className="lg:col-span-2">
            <p className="text-xs text-background/60 mb-1">横浜市立大学</p>
            <h3 className="text-lg font-medium mb-4">生体機能医科学研究室</h3>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              構造機能解析で微小管が紡ぐ生命の仕組みを解き明かす
            </p>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>〒236-0027 神奈川県横浜市金沢区瀬戸22-2</span>
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
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">&nbsp;</h4>
            <nav className="flex flex-col gap-2">
              {navItems.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © 2024 生体機能医科学研究室. All rights reserved.
            </p>
            <p className="text-xs text-background/40">
              Yokohama City University
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
