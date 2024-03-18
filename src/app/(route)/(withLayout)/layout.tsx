import Footer from '@/app/_components/layout/Footer'
import Header from '@/app/_components/layout/Header'
import React, { ReactNode } from 'react'

export default function WithLayout({ children }: { children: ReactNode }) {
  return (
    <main className="my-0 flex flex-col">
      <Header />
      <div className="mb-[18px]">{children}</div>
      <Footer />
    </main>
  )
}
