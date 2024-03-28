import React, { ReactNode } from 'react'
import RQProvider from '@/app/_components/RQProvider'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import MoSavesHeader from './_component/MoSavesHeader'

export default function SavesLayout({ children }: { children: ReactNode }) {
  return (
    <RQProvider>
      <MoSavesHeader />
      <div className={cn('p-[10px]', 'mo:mt-[60px]')}>{children}</div>
      <MoNavbar />
    </RQProvider>
  )
}
