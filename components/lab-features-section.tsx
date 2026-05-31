import { Users, Lightbulb, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "少人数制による手厚い指導",
    description: "教員と学生の距離が近く、一人ひとりに合わせた丁寧な指導を行います。実験の基礎から論文執筆まで、しっかりサポートします。",
  },
  {
    icon: Lightbulb,
    title: "主体性を育む研究環境",
    description: "自分で考え、行動する力を養います。アイデアを尊重し、挑戦を応援する風土があります。",
  },
  {
    icon: Award,
    title: "学会発表への挑戦",
    description: "学部生・大学院生問わず、積極的に学会発表の機会を設けています。研究成果を発信する力を身につけます。",
  },
]

export function LabFeaturesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
            Our Lab Culture
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            林研究室の特徴
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            私たちは、学生一人ひとりの成長を大切にしています
          </p>
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
