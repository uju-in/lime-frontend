'use client'

import { ReactNode } from 'react'
import MoItemDetailHeader from './_component/MoItemDetailHeader'

export default function ItemDetailLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <section>
      <MoItemDetailHeader />
      {children}
    </section>
  )
}
