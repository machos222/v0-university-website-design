import Link from "next/link"
import { ArrowRight, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-foreground/10 rounded-full text-sm mb-6">
              <GraduationCap className="h-4 w-4" />
              <span>学生募集中</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              一緒に生命の謎を<br className="hidden sm:block" />解き明かしませんか？
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              私たちの研究室では、意欲的な大学院生・学部生を募集しています。
              最先端の構造生物学研究に興味のある方は、ぜひお気軽にお問い合わせください。
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/for-students">
                  詳しく見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/access">
                  アクセス
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
              <div className="absolute inset-0 bg-primary-foreground/5 rounded-full" />
              <div className="absolute inset-8 bg-primary-foreground/5 rounded-full" />
              <div className="absolute inset-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-6xl lg:text-7xl">🔬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
