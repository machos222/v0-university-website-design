import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const researchProjects = [
  {
    id: 1,
    title: "微小管ダイナミクスの分子機構",
    description: "微小管は細胞骨格の主要構成要素であり、細胞分裂、細胞内輸送、細胞形態維持など多くの細胞機能に必須です。私たちは微小管の重合・脱重合を制御する分子メカニズムを、クライオ電子顕微鏡を用いた高分解能構造解析により明らかにしています。",
    highlights: [
      "チューブリン二量体の構造変化",
      "GTP加水分解と微小管不安定化",
      "微小管結合タンパク質の機能解析",
    ],
  },
  {
    id: 2,
    title: "キネシンモータータンパク質の運動機構",
    description: "キネシンは微小管上を移動するモータータンパク質であり、細胞内物質輸送に重要な役割を果たしています。ATPの化学エネルギーを機械的な運動に変換するメカニズムを、構造生物学的・生化学的アプローチで解明しています。",
    highlights: [
      "ATP加水分解サイクルと構造変化",
      "微小管との相互作用様式",
      "歩行運動の分子機構",
    ],
  },
  {
    id: 3,
    title: "ダイニン複合体の構造と機能",
    description: "ダイニンは微小管のマイナス端方向に移動する大型モータータンパク質複合体です。細胞分裂時の紡錘体形成や軸索輸送など、多様な細胞機能に関与しています。その巨大な複合体構造と運動メカニズムの解明に取り組んでいます。",
    highlights: [
      "ダイニン複合体のクライオEM構造解析",
      "調節サブユニットの機能解析",
      "疾患関連変異の構造基盤",
    ],
  },
]

const techniques = [
  {
    name: "クライオ電子顕微鏡",
    description: "生体高分子を凍結水和状態で観察し、原子分解能に迫る構造情報を取得",
  },
  {
    name: "X線結晶構造解析",
    description: "タンパク質結晶のX線回折パターンから高精度な三次元構造を決定",
  },
  {
    name: "分子動力学シミュレーション",
    description: "コンピュータシミュレーションによるタンパク質の動的挙動の解析",
  },
  {
    name: "生化学的解析",
    description: "タンパク質の精製、活性測定、相互作用解析などの生化学実験",
  },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              Our Research
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              研究内容
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              私たちの研究室では、構造生物学的手法を用いて微小管とその関連タンパク質の
              分子メカニズムを解明しています。
            </p>
          </div>
        </section>

        {/* Research Projects */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              研究プロジェクト
            </h2>
            <div className="space-y-12">
              {researchProjects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-border last:border-0"
                >
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      研究のハイライト
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
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
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              研究手法
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techniques.map((technique, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
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
