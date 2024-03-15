import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import RecoilRootProvider from './_components/RecoilRootProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LIME',
  description: '취미 아이템 구매를 위한 결정을 도와주는 서비스 🍋',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Toaster />
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  )
}
