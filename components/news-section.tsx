import Link from "next/link"
import { ArrowRight } from "lucide-react"

const news = [
  {
    date: "2024.12.15",
    category: "論文",
    title: "微小管-キネシン複合体の新構造を解明した論文がNature誌に掲載されました",
  },
  {
    date: "2024.11.20",
    category: "受賞",
    title: "山田太郎（D3）が日本生化学会若手優秀発表賞を受賞しました",
  },
  {
    date: "2024.10.05",
    category: "イベント",
    title: "研究室オープンラボを開催します（11月15日）",
  },
  {
    date: "2024.09.18",
    category: "メンバー",
    title: "新メンバー2名が加わりました",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              News & Updates
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              最新情報
            </h2>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {news.map((item, index) => (
            <article 
              key={index} 
              className="py-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-3 shrink-0">
                  <time className="text-sm text-muted-foreground font-mono">
                    {item.date}
                  </time>
                  <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <Link
            href="/publications"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            すべてのニュースを見る
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
