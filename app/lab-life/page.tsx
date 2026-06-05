"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Coffee, Presentation } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const eventIcons = [Presentation, Calendar, Users, Coffee]

export default function LabLifePage() {
  const { locale, t } = useLanguage()
  const pageT = t.pages.labLife

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

        {/* Regular Events */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.regularEventsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pageT.events.map((event, index) => {
                const Icon = eventIcons[index] || Presentation
                return (
                  <Card key={index} className="bg-card">
                    <CardContent className="pt-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {event.description}
                          </p>
                          <p className="text-xs text-primary font-medium">
                            {event.frequency}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.annualEventsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageT.annualEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border"
                >
                  <div className="text-xl font-bold text-primary shrink-0 w-10">
                    {event.month}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {event.event}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.facilitiesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pageT.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-lg border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.dailyScheduleTitle}
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative pl-8 border-l-2 border-primary/30">
                {pageT.dailySchedule.map((item, index) => (
                  <div key={index} className="relative mb-6 last:mb-0">
                    <div className="absolute -left-[25px] w-4 h-4 bg-primary rounded-full" />
                    <div className="pl-6">
                      <p className="text-sm font-mono text-primary mb-1">
                        {item.time}
                      </p>
                      <p className="text-foreground text-sm">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
