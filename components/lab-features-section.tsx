"use client"

import { Users, Lightbulb, Award } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function LabFeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Users,
      title: t.features.feature1.title,
      description: t.features.feature1.description,
    },
    {
      icon: Lightbulb,
      title: t.features.feature2.title,
      description: t.features.feature2.description,
    },
    {
      icon: Award,
      title: t.features.feature3.title,
      description: t.features.feature3.description,
    },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
            {t.features.subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
