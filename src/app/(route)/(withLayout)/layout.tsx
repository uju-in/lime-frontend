import Footer from '@/app/_components/layout/Footer'
import Header from '@/app/_components/layout/Header'
import { CookiesProvider } from 'next-client-cookies/server'
import React, { ReactNode } from 'react'

export default function WithLayout({ children }: { children: ReactNode }) {
  return (
    <main className="my-0 flex flex-col">
      <CookiesProvider>
        <Header />
        <div className="mb-[18px]">{children}</div>
        <Footer />
      </CookiesProvider>
    </main>
  )
}
