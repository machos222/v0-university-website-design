"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const faculty = [
  {
    name: "鈴木 一郎",
    nameEn: "Ichiro Suzuki",
    title: "教授",
    titleEn: "Professor",
    role: "研究室主宰者",
    roleEn: "Principal Investigator",
    specialization: "構造生物学、クライオ電子顕微鏡",
    specializationEn: "Structural Biology, Cryo-Electron Microscopy",
    email: "suzuki@example.ac.jp",
    bio: "東京大学大学院理学系研究科修了。博士（理学）。米国NIH博士研究員を経て、2010年より現職。",
    bioEn: "PhD from University of Tokyo. Postdoctoral fellow at NIH, USA. Current position since 2010.",
  },
  {
    name: "田中 花子",
    nameEn: "Hanako Tanaka",
    title: "准教授",
    titleEn: "Associate Professor",
    role: "共同研究責任者",
    roleEn: "Co-PI",
    specialization: "生化学、タンパク質工学",
    specializationEn: "Biochemistry, Protein Engineering",
    email: "tanaka@example.ac.jp",
    bio: "京都大学大学院生命科学研究科修了。博士（生命科学）。2015年より現職。",
    bioEn: "PhD from Kyoto University. Current position since 2015.",
  },
  {
    name: "佐藤 健二",
    nameEn: "Kenji Sato",
    title: "助教",
    titleEn: "Assistant Professor",
    role: "構造解析担当",
    roleEn: "Structural Analysis",
    specialization: "X線結晶構造解析、計算科学",
    specializationEn: "X-ray Crystallography, Computational Science",
    email: "sato@example.ac.jp",
    bio: "大阪大学大学院理学研究科修了。博士（理学）。2020年より現職。",
    bioEn: "PhD from Osaka University. Current position since 2020.",
  },
]

const students = [
  {
    name: "山田 太郎",
    nameEn: "Taro Yamada",
    title: "博士課程3年",
    titleEn: "D3",
    research: "キネシン-微小管複合体の構造解析",
    researchEn: "Structural analysis of kinesin-microtubule complex",
  },
  {
    name: "伊藤 美咲",
    nameEn: "Misaki Ito",
    title: "博士課程2年",
    titleEn: "D2",
    research: "ダイニン調節サブユニットの機能解析",
    researchEn: "Functional analysis of dynein regulatory subunits",
  },
  {
    name: "高橋 翔太",
    nameEn: "Shota Takahashi",
    title: "博士課程1年",
    titleEn: "D1",
    research: "微小管結合タンパク質の構造研究",
    researchEn: "Structural study of microtubule-binding proteins",
  },
  {
    name: "渡辺 真理",
    nameEn: "Mari Watanabe",
    title: "修士課程2年",
    titleEn: "M2",
    research: "チューブリン変異体の生化学解析",
    researchEn: "Biochemical analysis of tubulin mutants",
  },
  {
    name: "中村 大輝",
    nameEn: "Daiki Nakamura",
    title: "修士課程1年",
    titleEn: "M1",
    research: "クライオEM画像解析手法の開発",
    researchEn: "Development of cryo-EM image analysis methods",
  },
  {
    name: "小林 さくら",
    nameEn: "Sakura Kobayashi",
    title: "学部4年",
    titleEn: "B4",
    research: "モータータンパク質の運動解析",
    researchEn: "Motility analysis of motor proteins",
  },
]

const staff = [
  {
    name: "木村 由美",
    nameEn: "Yumi Kimura",
    title: "技術職員",
    titleEn: "Technical Staff",
    role: "クライオEM施設管理",
    roleEn: "Cryo-EM Facility Management",
  },
  {
    name: "森田 誠",
    nameEn: "Makoto Morita",
    title: "研究支援員",
    titleEn: "Research Assistant",
    role: "タンパク質精製サポート",
    roleEn: "Protein Purification Support",
  },
  {
    name: "吉田 あゆみ",
    nameEn: "Ayumi Yoshida",
    title: "秘書",
    titleEn: "Secretary",
    role: "研究室事務",
    roleEn: "Lab Administration",
  },
]

export default function MembersPage() {
  const { locale, t } = useLanguage()
  const pageT = t.pages.members

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

        {/* Faculty */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.facultyTitle}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {faculty.map((member, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-20 h-20 mb-3">
                        <AvatarFallback className="text-xl bg-primary/10 text-primary">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-foreground">
                        {locale === "ja" ? member.name : member.nameEn}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {locale === "ja" ? member.nameEn : member.name}
                      </p>
                      <p className="text-sm text-primary font-medium mb-3">
                        {locale === "ja" ? member.title : member.titleEn}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {locale === "ja" ? member.specialization : member.specializationEn}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {locale === "ja" ? member.bio : member.bioEn}
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
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.studentsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {students.map((member, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border"
                >
                  <Avatar className="w-11 h-11 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {locale === "ja" ? member.name : member.nameEn}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">
                      {locale === "ja" ? member.title : member.titleEn}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "ja" ? member.research : member.researchEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Staff */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {pageT.staffTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {staff.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border"
                >
                  <Avatar className="w-11 h-11 shrink-0">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {locale === "ja" ? member.name : member.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {locale === "ja" ? `${member.title} / ${member.role}` : `${member.titleEn} / ${member.roleEn}`}
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
