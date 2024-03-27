'use client'

import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'

export default function AddItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mo:w-full mo:px-[16px]">
      <MoHeader.Back title="아이템 생성" />
      <div className="flex h-dvh w-full justify-center bg-[#F7F7F7]">
        {children}
      </div>
      <MoNavbar />
    </div>
  )
}
