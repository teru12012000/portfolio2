import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Color from '@/shared/Color'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TERUSHIのポートフォリオ',
  description: '私のポートフォリオについてです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{backgroundColor:Color.background.silver}}>
        <Header
          language='ja'
        />
        {children}
      </body>
    </html>
  )
}
