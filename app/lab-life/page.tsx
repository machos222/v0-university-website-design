import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Coffee, Presentation } from "lucide-react"

const events = [
  {
    title: "週例セミナー",
    description: "毎週金曜日に研究進捗報告と論文紹介を行います",
    icon: Presentation,
    frequency: "毎週金曜 16:00-18:00",
  },
  {
    title: "ジャーナルクラブ",
    description: "最新論文を輪読し、ディスカッションを行います",
    icon: Calendar,
    frequency: "隔週水曜 12:00-13:00",
  },
  {
    title: "ラボミーティング",
    description: "研究室全体での情報共有と連絡事項の確認",
    icon: Users,
    frequency: "月1回",
  },
  {
    title: "コーヒーブレイク",
    description: "リラックスしながらの自由な議論の場",
    icon: Coffee,
    frequency: "毎日 15:00頃",
  },
]

const annualEvents = [
  {
    month: "4月",
    event: "新歓パーティー",
    description: "新メンバーの歓迎会を開催",
  },
  {
    month: "5月",
    event: "GW研究室旅行",
    description: "研究室メンバーでの親睦旅行",
  },
  {
    month: "8月",
    event: "夏合宿",
    description: "2泊3日の集中セミナー合宿",
  },
  {
    month: "9月",
    event: "学会シーズン",
    description: "日本生化学会、分子生物学会等",
  },
  {
    month: "12月",
    event: "忘年会",
    description: "1年の締めくくりパーティー",
  },
  {
    month: "3月",
    event: "卒業・修了祝い",
    description: "卒業生・修了生の送別会",
  },
]

const facilities = [
  {
    name: "クライオ電子顕微鏡室",
    description: "最新のクライオEMシステムを完備。24時間データ収集可能。",
  },
  {
    name: "タンパク質精製室",
    description: "大腸菌発現系から昆虫細胞まで、各種発現系に対応。",
  },
  {
    name: "計算機室",
    description: "GPUクラスターによる画像解析・構造計算環境。",
  },
  {
    name: "学生居室",
    description: "各自専用のデスク、PC完備。24時間利用可能。",
  },
]

export default function LabLifePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              Lab Life
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              研究室生活
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              私たちの研究室での日常と、研究環境をご紹介します。
            </p>
          </div>
        </section>

        {/* Regular Events */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              定例イベント
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <event.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {event.description}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {event.frequency}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              年間行事
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {annualEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border"
                >
                  <div className="text-2xl font-bold text-primary shrink-0 w-12">
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
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              研究設備
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border"
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
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              典型的な1日
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative pl-8 border-l-2 border-primary/30">
                {[
                  { time: "9:00", activity: "出勤・メールチェック" },
                  { time: "9:30", activity: "実験開始（タンパク質精製、クライオEM観察など）" },
                  { time: "12:00", activity: "昼食" },
                  { time: "13:00", activity: "実験継続・データ解析" },
                  { time: "15:00", activity: "コーヒーブレイク・ディスカッション" },
                  { time: "15:30", activity: "実験・論文執筆" },
                  { time: "18:00", activity: "データまとめ・翌日の準備" },
                  { time: "19:00", activity: "帰宅（個人の裁量で調整可）" },
                ].map((item, index) => (
                  <div key={index} className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[25px] w-4 h-4 bg-primary rounded-full" />
                    <div className="pl-6">
                      <p className="text-sm font-mono text-primary mb-1">
                        {item.time}
                      </p>
                      <p className="text-foreground">{item.activity}</p>
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
