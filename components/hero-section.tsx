import Link from "next/link"
import { ArrowRight, Microscope, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <MicrotubulePattern />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
            Yokohama City University
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            <span className="text-balance">構造機能解析で</span>
            <br />
            <span className="text-primary text-balance">微小管</span>
            <span className="text-balance">が紡ぐ</span>
            <br />
            <span className="text-balance">生命の仕組みを解き明かす</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            私たちは、クライオ電子顕微鏡を用いた構造生物学的アプローチにより、
            微小管とモータータンパク質の分子メカニズムを研究しています。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/research">
                Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/for-students">
                Join Our Lab
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl">
          <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Microscope className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">Years of Research</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Lab Members</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MicrotubulePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="microtubule" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="8" fill="currentColor" className="text-primary" />
          <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
          <circle cx="0" cy="0" r="4" fill="currentColor" className="text-primary" />
          <circle cx="60" cy="0" r="4" fill="currentColor" className="text-primary" />
          <circle cx="0" cy="60" r="4" fill="currentColor" className="text-primary" />
          <circle cx="60" cy="60" r="4" fill="currentColor" className="text-primary" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#microtubule)" />
    </svg>
  )
}
