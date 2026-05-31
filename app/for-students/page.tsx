import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, GraduationCap, FlaskConical, Users } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "博士課程",
    duration: "3年間",
    description: "独立した研究者として必要なスキルを習得し、学位論文を完成させます。",
    features: [
      "オリジナルの研究テーマ設定",
      "国際学会での発表機会",
      "海外研究機関との共同研究",
      "博士研究員・ポスドクへのキャリアパス",
    ],
  },
  {
    title: "修士課程",
    duration: "2年間",
    description: "構造生物学の基礎から応用まで、体系的に学びます。",
    features: [
      "クライオEM・X線解析技術の習得",
      "タンパク質発現・精製技術",
      "論文読解・プレゼンテーション能力",
      "博士課程進学への準備",
    ],
  },
  {
    title: "学部研究",
    duration: "1年間",
    description: "研究の基礎を学びながら、卒業研究に取り組みます。",
    features: [
      "研究室配属後の基礎トレーニング",
      "先輩学生との共同研究",
      "卒業論文の執筆",
      "大学院進学の相談",
    ],
  },
]

const whyJoinUs = [
  {
    icon: FlaskConical,
    title: "最先端の研究環境",
    description: "世界トップクラスのクライオ電子顕微鏡と計算機環境を完備しています。",
  },
  {
    icon: Users,
    title: "少人数制の指導",
    description: "教員と学生の距離が近く、きめ細やかな指導を受けられます。",
  },
  {
    icon: GraduationCap,
    title: "充実したキャリアサポート",
    description: "アカデミア・企業への就職支援、海外留学のサポートも行っています。",
  },
]

const faq = [
  {
    question: "研究室見学は可能ですか？",
    answer: "はい、随時受け付けています。メールでお問い合わせください。オンラインでの説明も可能です。",
  },
  {
    question: "必要な予備知識はありますか？",
    answer: "生化学・分子生物学の基礎知識があれば十分です。プログラミングや構造解析の経験は入学後に習得できます。",
  },
  {
    question: "奨学金は利用できますか？",
    answer: "日本学術振興会特別研究員（DC1, DC2）への応募をサポートしています。また、大学独自の奨学金制度もあります。",
  },
  {
    question: "他大学からの進学は可能ですか？",
    answer: "もちろん可能です。実際に多くの学生が他大学から進学しています。入試情報は大学院入試要項をご確認ください。",
  },
]

export default function ForStudentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              For Students
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              学生募集
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              私たちと一緒に、生命の神秘を解き明かしませんか？
              意欲ある学生の皆さんの参加をお待ちしています。
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12 text-center">
              当研究室の特徴
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyJoinUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              受入プログラム
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
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
                    <ul className="space-y-3">
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
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              よくある質問
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faq.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-3">
                    Q. {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A. {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              お気軽にお問い合わせください
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              研究室見学や進学相談など、お気軽にご連絡ください。
              オンラインでの面談も可能です。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href="mailto:contact@example.ac.jp">
                  <Mail className="mr-2 h-4 w-4" />
                  メールで問い合わせる
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/access">
                  アクセス情報を見る
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
