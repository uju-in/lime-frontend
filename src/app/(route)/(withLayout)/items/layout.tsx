'use client'

import React, { ReactNode } from 'react'
import RQProvider from '@/app/_components/RQProvider'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'

import FloatingButton from './_components/FloatingButton'

export default function ItemListLayout({ children }: { children: ReactNode }) {
  return (
    <RQProvider>
      <div>{children}</div>
      <FloatingButton />
    </RQProvider>
  )
}
