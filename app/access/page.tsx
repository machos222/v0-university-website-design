import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Train, Bus, Car } from "lucide-react"

export default function AccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
              横浜市立大学 金沢八景キャンパスへのアクセス方法をご案内します。
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Address & Contact */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                  連絡先
                </h2>
                <div className="space-y-6">
                  <Card className="bg-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        住所
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        〒236-0027<br />
                        神奈川県横浜市金沢区瀬戸22-2<br />
                        横浜市立大学 金沢八景キャンパス<br />
                        理学研究棟 5階 501号室
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        電話
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        045-787-XXXX（内線：XXXX）
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        メール
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href="mailto:contact@example.ac.jp"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        contact@example.ac.jp
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                  地図
                </h2>
                <div className="aspect-[4/3] bg-secondary rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">
                      横浜市立大学 金沢八景キャンパス
                    </p>
                    <a
                      href="https://maps.google.com/?q=横浜市立大学+金沢八景キャンパス"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline mt-2 inline-block"
                    >
                      Google マップで開く →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Methods */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              交通アクセス
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Train */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="h-5 w-5 text-primary" />
                    電車でお越しの場合
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground mb-2">
                      京急線「金沢八景駅」
                    </p>
                    <p className="text-sm text-muted-foreground">
                      下車徒歩約5分
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">
                      シーサイドライン「金沢八景駅」
                    </p>
                    <p className="text-sm text-muted-foreground">
                      下車徒歩約5分
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">品川から</span>：約45分<br />
                      <span className="font-medium">横浜から</span>：約25分
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Bus */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bus className="h-5 w-5 text-primary" />
                    バスでお越しの場合
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-medium text-foreground mb-2">
                      京急バス
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      「横浜市大前」下車すぐ
                    </p>
                    <p className="text-sm text-muted-foreground">
                      JR新杉田駅、京急金沢八景駅からバスが運行しています。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Car */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    お車でお越しの場合
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    首都高速湾岸線「幸浦」出口より約10分
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ※ キャンパス内の駐車場は限りがございます。
                    事前にご連絡ください。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Campus Map */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              キャンパス内案内
            </h2>
            <div className="p-8 bg-card rounded-lg border border-border">
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
                      右手に見える理学研究棟に入ります
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      エレベーターで5階へ
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      501号室が当研究室です
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
        </section>
      </main>
      <Footer />
    </div>
  )
}
