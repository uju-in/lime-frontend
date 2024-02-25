import React from 'react'

import RQProvider from '@/app/_components/RQProvider'
import UserInfoField from './_components/UserInfoField'

export default function JoinPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F7F7F7]">
      <section className="mx-auto w-[610px] flex-1 bg-white px-[87px] pt-[71px]">
        <p className="mb-[10px] text-[26px] font-[700]">Lime</p>
        <h1 className="mb-[69px] text-[30px] font-[600]">프로필 작성</h1>
        <RQProvider>
          <UserInfoField />
        </RQProvider>
      </section>
    </main>
  )
}
