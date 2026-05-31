import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

const faculty = [
  {
    name: "鈴木 一郎",
    nameEn: "Ichiro Suzuki",
    title: "教授 / Professor",
    role: "研究室主宰者",
    specialization: "構造生物学、クライオ電子顕微鏡",
    email: "suzuki@example.ac.jp",
    bio: "東京大学大学院理学系研究科修了。博士（理学）。米国NIH博士研究員を経て、2010年より現職。",
  },
  {
    name: "田中 花子",
    nameEn: "Hanako Tanaka",
    title: "准教授 / Associate Professor",
    role: "共同研究責任者",
    specialization: "生化学、タンパク質工学",
    email: "tanaka@example.ac.jp",
    bio: "京都大学大学院生命科学研究科修了。博士（生命科学）。2015年より現職。",
  },
  {
    name: "佐藤 健二",
    nameEn: "Kenji Sato",
    title: "助教 / Assistant Professor",
    role: "構造解析担当",
    specialization: "X線結晶構造解析、計算科学",
    email: "sato@example.ac.jp",
    bio: "大阪大学大学院理学研究科修了。博士（理学）。2020年より現職。",
  },
]

const students = [
  {
    name: "山田 太郎",
    nameEn: "Taro Yamada",
    title: "博士課程3年 / D3",
    research: "キネシン-微小管複合体の構造解析",
  },
  {
    name: "伊藤 美咲",
    nameEn: "Misaki Ito",
    title: "博士課程2年 / D2",
    research: "ダイニン調節サブユニットの機能解析",
  },
  {
    name: "高橋 翔太",
    nameEn: "Shota Takahashi",
    title: "博士課程1年 / D1",
    research: "微小管結合タンパク質の構造研究",
  },
  {
    name: "渡辺 真理",
    nameEn: "Mari Watanabe",
    title: "修士課程2年 / M2",
    research: "チューブリン変異体の生化学解析",
  },
  {
    name: "中村 大輝",
    nameEn: "Daiki Nakamura",
    title: "修士課程1年 / M1",
    research: "クライオEM画像解析手法の開発",
  },
  {
    name: "小林 さくら",
    nameEn: "Sakura Kobayashi",
    title: "学部4年 / B4",
    research: "モータータンパク質の運動解析",
  },
]

const staff = [
  {
    name: "木村 由美",
    nameEn: "Yumi Kimura",
    title: "技術職員",
    role: "クライオEM施設管理",
  },
  {
    name: "森田 誠",
    nameEn: "Makoto Morita",
    title: "研究支援員",
    role: "タンパク質精製サポート",
  },
  {
    name: "吉田 あゆみ",
    nameEn: "Ayumi Yoshida",
    title: "秘書",
    role: "研究室事務",
  },
]

export default function MembersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              Our Team
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              メンバー
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              多様なバックグラウンドを持つメンバーが協力して研究を進めています。
            </p>
          </div>
        </section>

        {/* Faculty */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              教員
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-4">
                        <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {member.nameEn}
                      </p>
                      <p className="text-sm text-primary font-medium mb-4">
                        {member.title}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {member.specialization}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Students */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              大学院生・学部生
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((member, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border"
                >
                  <Avatar className="w-12 h-12 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.research}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Staff */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              スタッフ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {staff.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border"
                >
                  <Avatar className="w-12 h-12 shrink-0">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.title} / {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
