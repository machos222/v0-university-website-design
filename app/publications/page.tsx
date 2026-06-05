"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

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
        type: "original",
      },
      {
        title: "Dynamic conformational changes of tubulin during GTP hydrolysis",
        authors: "Ito M, Sato K, Suzuki I",
        journal: "Cell",
        volume: "187",
        pages: "2456-2470",
        doi: "10.1016/j.cell.xxxxx",
        type: "original",
      },
      {
        title: "Cryo-EM解析が明らかにする微小管ダイナミクスの分子機構",
        titleEn: "Molecular mechanisms of microtubule dynamics revealed by cryo-EM analysis",
        authors: "鈴木一郎",
        authorsEn: "Suzuki I",
        journal: "生化学",
        journalEn: "Seikagaku",
        volume: "96",
        pages: "45-58",
        doi: "",
        type: "review",
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
        type: "original",
      },
      {
        title: "Mechanism of kinesin processivity along microtubules",
        authors: "Watanabe M, Sato K, Tanaka H, Suzuki I",
        journal: "EMBO Journal",
        volume: "42",
        pages: "e112345",
        doi: "10.15252/embj.xxxxx",
        type: "original",
      },
      {
        title: "High-resolution cryo-EM analysis of motor protein complexes",
        authors: "Nakamura D, Sato K, Suzuki I",
        journal: "Journal of Molecular Biology",
        volume: "435",
        pages: "168123",
        doi: "10.1016/j.jmb.xxxxx",
        type: "original",
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
        type: "original",
      },
      {
        title: "ATP-dependent conformational changes in kinesin motor domain",
        authors: "Yamada T, Suzuki I",
        journal: "eLife",
        volume: "11",
        pages: "e78901",
        doi: "10.7554/eLife.xxxxx",
        type: "original",
      },
    ],
  },
]

export default function PublicationsPage() {
  const { locale, t } = useLanguage()
  const pageT = t.pages.publications

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Page Header */}
        <section className="bg-secondary/30 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              {pageT.pageSubtitle}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {pageT.pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {pageT.pageDescription}
            </p>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {publications.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-12 last:mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-primary">
                    {yearGroup.year}
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-sm text-muted-foreground">
                    {yearGroup.papers.length} publications
                  </span>
                </div>
                <div className="space-y-4">
                  {yearGroup.papers.map((paper, index) => (
                    <article
                      key={index}
                      className="p-5 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <Badge variant="secondary" className="shrink-0">
                          {paper.type === "original" ? pageT.originalPaper : pageT.review}
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
                      <h3 className="text-base font-medium text-foreground mb-2">
                        {locale === "en" && paper.titleEn ? paper.titleEn : paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {locale === "en" && paper.authorsEn ? paper.authorsEn : paper.authors}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          {locale === "en" && paper.journalEn ? paper.journalEn : paper.journal}
                        </span>
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
