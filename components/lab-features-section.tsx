"use client"

import { Users, Lightbulb, Award, Heart, Clock } from "lucide-react"
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
    {
      icon: Heart,
      title: t.features.feature4.title,
      description: t.features.feature4.description,
    },
    {
      icon: Clock,
      title: t.features.feature5.title,
      description: t.features.feature5.description,
    },
  ]

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
            {t.features.subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div
              key={index + 3}
              className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
