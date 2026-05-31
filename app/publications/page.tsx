import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const publications = [
  {
    year: 2024,
    papers: [
      {
        title: "Structural basis of microtubule-kinesin interaction revealed by cryo-EM",
        authors: "Yamada T, Tanaka H, Sato K, Suzuki I",
        journal: "Nature",
        volume: "615",
        pages: "123-130",
        doi: "10.1038/xxxxx",
        type: "原著論文",
      },
      {
        title: "Dynamic conformational changes of tubulin during GTP hydrolysis",
        authors: "Ito M, Sato K, Suzuki I",
        journal: "Cell",
        volume: "187",
        pages: "2456-2470",
        doi: "10.1016/j.cell.xxxxx",
        type: "原著論文",
      },
      {
        title: "Cryo-EM解析が明らかにする微小管ダイナミクスの分子機構",
        authors: "鈴木一郎",
        journal: "生化学",
        volume: "96",
        pages: "45-58",
        doi: "",
        type: "総説",
      },
    ],
  },
  {
    year: 2023,
    papers: [
      {
        title: "Structure of the dynein-dynactin complex bound to microtubules",
        authors: "Takahashi S, Tanaka H, Suzuki I",
        journal: "Science",
        volume: "380",
        pages: "890-897",
        doi: "10.1126/science.xxxxx",
        type: "原著論文",
      },
      {
        title: "Mechanism of kinesin processivity along microtubules",
        authors: "Watanabe M, Sato K, Tanaka H, Suzuki I",
        journal: "EMBO Journal",
        volume: "42",
        pages: "e112345",
        doi: "10.15252/embj.xxxxx",
        type: "原著論文",
      },
      {
        title: "High-resolution cryo-EM analysis of motor protein complexes",
        authors: "Nakamura D, Sato K, Suzuki I",
        journal: "Journal of Molecular Biology",
        volume: "435",
        pages: "168123",
        doi: "10.1016/j.jmb.xxxxx",
        type: "原著論文",
      },
    ],
  },
  {
    year: 2022,
    papers: [
      {
        title: "Structural insights into microtubule nucleation by γ-tubulin ring complex",
        authors: "Kobayashi S, Tanaka H, Sato K, Suzuki I",
        journal: "Nature Structural & Molecular Biology",
        volume: "29",
        pages: "567-575",
        doi: "10.1038/s41594-xxxxx",
        type: "原著論文",
      },
      {
        title: "ATP-dependent conformational changes in kinesin motor domain",
        authors: "Yamada T, Suzuki I",
        journal: "eLife",
        volume: "11",
        pages: "e78901",
        doi: "10.7554/eLife.xxxxx",
        type: "原著論文",
      },
    ],
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              Publications
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              業績一覧
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              当研究室で発表した論文・総説の一覧です。
            </p>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {publications.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-16 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-primary">
                    {yearGroup.year}
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-sm text-muted-foreground">
                    {yearGroup.papers.length} publications
                  </span>
                </div>
                <div className="space-y-6">
                  {yearGroup.papers.map((paper, index) => (
                    <article
                      key={index}
                      className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <Badge variant="secondary" className="shrink-0">
                          {paper.type}
                        </Badge>
                        {paper.doi && (
                          <a
                            href={`https://doi.org/${paper.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            DOI
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {paper.authors}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">{paper.journal}</span>
                        {paper.volume && ` ${paper.volume}`}
                        {paper.pages && `, ${paper.pages}`}
                        {` (${yearGroup.year})`}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
