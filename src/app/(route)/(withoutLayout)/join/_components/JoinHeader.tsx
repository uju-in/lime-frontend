'use client'

import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'
import React from 'react'

export default function JoinHeader() {
  return (
    <>
      {/* Mobile */}
      <MoHeader.Back title="프로필 작성" />

      {/* PC */}
      <header className="mo:hidden">
        <p className="mb-[10px] pt-[71px] text-[26px] font-[700]">Lime</p>
        <h1 className="text-[30px] font-[600]">프로필 작성</h1>
      </header>
    </>
  )
}
