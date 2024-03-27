'use client'

import { ReactNode } from 'react'
import RQProvider from '@/app/_components/RQProvider'
import FloatingButton from './_components/FloatingButton'

export default function ItemListLayout({ children }: { children: ReactNode }) {
  return (
    <RQProvider>
      <div>{children}</div>
      <FloatingButton />
    </RQProvider>
  )
}
