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
              横浜市立大学 鶴見キャンパスへのアクセス方法をご案内します。
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
                        〒230-0045<br />
                        神奈川県横浜市鶴見区末広町1-7-29<br />
                        横浜市立大学 鶴見キャンパス
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
                <div className="aspect-[4/3] bg-secondary rounded-lg border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.2!2d139.6747!3d35.5050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f8a8a6a0a0b%3A0x8a8a8a8a8a8a8a8a!2z5qiq5rWc5biC56uL5aSn5a2mIOmxuOimi-OCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="横浜市立大学 鶴見キャンパス"
                  />
                </div>
                <p className="mt-4 text-center">
                  <a
                    href="https://maps.google.com/?q=横浜市立大学+鶴見キャンパス"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    Google マップで開く
                  </a>
                </p>
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
                      JR鶴見線「鶴見小野駅」
                    </p>
                    <p className="text-sm text-muted-foreground">
                      下車徒歩約5分
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">横浜から</span>：JR京浜東北線で鶴見駅へ、JR鶴見線に乗り換え
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
                      JR「鶴見駅」または京急「京急鶴見駅」から
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      バス利用可能
                    </p>
                    <p className="text-sm text-muted-foreground">
                      鶴見駅東口よりバスが運行しています。
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
