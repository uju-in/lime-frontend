'use client'

import RQProvider from '@/app/_components/RQProvider'
import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import React, { ReactNode } from 'react'

export default function ItemListLayout({ children }: { children: ReactNode }) {
  return (
    <RQProvider>
      <div
        className={cn(
          'mx-auto flex w-[1024px] max-w-full gap-[50px] px-[10px]',
          'mo:px-[16px]',
        )}
      >
        {children}
      </div>
      <MoNavbar />
    </RQProvider>
  )
}
