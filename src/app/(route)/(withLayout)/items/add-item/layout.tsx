'use client'

import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'

export default function AddItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mo:px-[16px]">
      <MoHeader.Back title="아이템 생성" />
      <div className="flex h-dvh justify-center bg-[#F7F7F7]">{children}</div>
    </div>
  )
}
