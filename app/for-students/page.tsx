"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LabFeaturesSection } from "@/components/lab-features-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export default function ForStudentsPage() {
  const { locale, t } = useLanguage()
  const pageT = t.pages.forStudents

  const programs = [
    {
      title: pageT.doctoral.title,
      duration: pageT.doctoral.duration,
      description: pageT.doctoral.description,
      features: pageT.doctoral.features,
    },
    {
      title: pageT.master.title,
      duration: pageT.master.duration,
      description: pageT.master.description,
      features: pageT.master.features,
    },
    {
      title: pageT.undergraduate.title,
      duration: pageT.undergraduate.duration,
      description: pageT.undergraduate.description,
      features: pageT.undergraduate.features,
    },
  ]

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

        {/* Lab Features Section - Merged and unified */}
        <LabFeaturesSection />

        {/* Programs */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.programsTitle}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <span className="text-sm text-primary font-medium">
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {program.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.faqTitle}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {pageT.faq.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-lg border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    Q. {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    A. {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              {pageT.ctaTitle}
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              {pageT.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href="mailto:contact@example.ac.jp">
                  <Mail className="mr-2 h-4 w-4" />
                  {pageT.ctaEmailButton}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/access">
                  {pageT.ctaAccessButton}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
