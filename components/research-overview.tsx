import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const researchTopics = [
  {
    title: "微小管ダイナミクス",
    description: "微小管の重合・脱重合メカニズムの解明と、細胞分裂における役割の研究",
    icon: "🧬",
  },
  {
    title: "モータータンパク質",
    description: "キネシン・ダイニンの構造と運動メカニズムの分子レベルでの解析",
    icon: "⚙️",
  },
  {
    title: "クライオ電子顕微鏡",
    description: "最先端のクライオEM技術を用いた高分解能構造解析",
    icon: "🔬",
  },
]

export function ResearchOverview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              Our Research
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              研究概要
            </h2>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            詳しく見る
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchTopics.map((topic, index) => (
            <Card key={index} className="bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{topic.icon}</div>
                <CardTitle className="text-xl">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
