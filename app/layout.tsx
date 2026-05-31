import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  title: '生体機能医科学研究室 | 横浜市立大学',
  description: '横浜市立大学 生体機能医科学研究室 - 構造機能解析で微小管が紡ぐ生命の仕組みを解き明かす',
  keywords: '微小管, 構造生物学, クライオ電子顕微鏡, 横浜市立大学, 研究室',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
