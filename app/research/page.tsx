"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

export default function ResearchPage() {
  const { locale, t } = useLanguage()
  const pageT = t.pages.research

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

        {/* Research Projects */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.projectsTitle}
            </h2>
            <div className="space-y-8">
              {pageT.projects.map((project, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8 border-b border-border last:border-0"
                >
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      {pageT.highlightsTitle}
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.techniquesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pageT.techniques.map((technique, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{technique.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {technique.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
