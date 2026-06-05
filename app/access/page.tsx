"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Train, Bus, Car, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export default function AccessPage() {
  const { locale, t } = useLanguage()
  const pageT = t.pages.access

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

        {/* Location & Map Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {pageT.locationTitle}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Address & Nearest Station */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-5 bg-card rounded-lg border border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{pageT.addressLabel}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                        {pageT.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-4 border-t border-border">
                    <Train className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{pageT.nearestStationLabel}</h3>
                      <p className="text-muted-foreground text-sm">
                        {pageT.nearestStation}
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
                    title={locale === "ja" ? "横浜市立大学 鶴見キャンパス" : "Yokohama City University Tsurumi Campus"}
                  />
                </div>
                <div className="mt-3 flex justify-start">
                  <Button asChild variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                    <a
                      href="https://www.google.com/maps/place/%E6%A8%AA%E6%B5%9C%E5%B8%82%E7%AB%8B%E5%A4%A7%E5%AD%A6+%E9%B6%B4%E8%A6%8B%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9/@35.5027,139.6825,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {pageT.openInGoogleMaps}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Methods */}
        <section className="py-12 lg:py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {pageT.transportTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Train */}
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Train className="h-5 w-5 text-primary" />
                    {pageT.train.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground mb-1 text-sm">
                      {pageT.train.station}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {pageT.train.walk}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      {pageT.train.fromYokohama}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Bus */}
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bus className="h-5 w-5 text-primary" />
                    {pageT.bus.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-medium text-foreground mb-1 text-sm">
                      {pageT.bus.from}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pageT.bus.busStop}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {pageT.bus.route}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Car */}
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Car className="h-5 w-5 text-primary" />
                    {pageT.car.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pageT.car.route}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {pageT.car.note}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Campus Guide & Contact */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Campus Map */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {pageT.campusGuideTitle}
                </h2>
                <div className="p-5 bg-card rounded-lg border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        {pageT.labLocationTitle}
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {pageT.labLocationSteps.map((step, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        {pageT.visitRequestTitle}
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {pageT.visitRequestSteps.map((step, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {pageT.contactTitle}
                </h2>
                <div className="p-5 bg-card rounded-lg border border-border h-fit">
                  <p className="text-sm text-muted-foreground mb-5">
                    {pageT.contactDescription}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{pageT.phoneLabel}</p>
                        <p className="font-medium text-foreground">045-508-XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{pageT.emailLabel}</p>
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
