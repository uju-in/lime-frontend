import RQProvider from '@/app/_components/RQProvider'
import React, { ReactNode } from 'react'
import MoSearchHeader from './_components/MoSearchHeader'

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <RQProvider>
      <div className="mx-auto w-[1200px] max-w-full p-[10px]">
        <MoSearchHeader />
        {children}
      </div>
    </RQProvider>
  )
}
