import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Train, Bus, Car, ExternalLink } from "lucide-react"

export default function AccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
              Access
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              アクセス
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              横浜市立大学 鶴見キャンパスへのアクセス方法をご案内します。
            </p>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              所在地・地図
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Address & Nearest Station */}
              <div className="lg:col-span-2 space-y-6">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">住所</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        〒230-0045<br />
                        神奈川県横浜市鶴見区末広町1-7-29<br />
                        横浜市立大学 鶴見キャンパス
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-4 border-t border-border">
                    <Train className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">最寄駅</h3>
                      <p className="text-muted-foreground">
                        JR鶴見線「鶴見小野駅」より徒歩約5分
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-3">
                <div className="aspect-[4/3] bg-secondary rounded-lg border border-border overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.507!2d139.6825!3d35.5027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f0e64bce29f%3A0x9f3dbff4df9c1f19!2z5qiq5rWc5biC56uL5aSn5a2mIOmxuOimi-OCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="横浜市立大学 鶴見キャンパス"
                  />
                </div>
                <div className="mt-4 flex justify-start">
                  <Button asChild variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                    <a
                      href="https://www.google.com/maps/place/%E6%A8%AA%E6%B5%9C%E5%B8%82%E7%AB%8B%E5%A4%A7%E5%AD%A6+%E9%B6%B4%E8%A6%8B%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9/@35.5027,139.6825,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Google マップで開く
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Methods */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              交通アクセス
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Train */}
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Train className="h-5 w-5 text-primary" />
                    電車でお越しの場合
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      JR鶴見線「鶴見小野駅」
                    </p>
                    <p className="text-sm text-muted-foreground">
                      下車徒歩約5分
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">横浜から</span>：JR京浜東北線で鶴見駅へ、JR鶴見線に乗り換え
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Bus */}
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bus className="h-5 w-5 text-primary" />
                    バスでお越しの場合
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      JR「鶴見駅」または京急「京急鶴見駅」から
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      鶴見駅東口よりバス利用可能
                    </p>
                    <p className="text-sm text-muted-foreground">
                      臨港バス「理研・市大大学院行き」乗車、終点下車すぐ
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Car */}
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Car className="h-5 w-5 text-primary" />
                    お車でお越しの場合
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    首都高速横羽線「生麦」出口より約10分
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ※ キャンパス内の駐車場は限りがございます。事前にご連絡ください。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Campus Guide & Contact */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Campus Map */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                  キャンパス内案内
                </h2>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">
                        研究室の場所
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          正門から入り、まっすぐ進みます
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          右手に見える研究棟に入ります
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          エレベーターで該当階へ
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          研究室は廊下奥にあります
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">
                        お越しの際のお願い
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          見学をご希望の方は事前にメールでご連絡ください
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          建物入口で受付を行ってください
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          オンライン面談も可能です
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                  お問い合わせ
                </h2>
                <div className="p-6 bg-card rounded-lg border border-border h-fit">
                  <p className="text-sm text-muted-foreground mb-6">
                    研究室見学やご質問はお気軽にお問い合わせください。
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">電話番号</p>
                        <p className="font-medium text-foreground">045-508-XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">メールアドレス</p>
                        <a
                          href="mailto:hayashi@yokohama-cu.ac.jp"
                          className="font-medium text-primary hover:text-primary/80 transition-colors hover:underline"
                        >
                          hayashi@yokohama-cu.ac.jp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
