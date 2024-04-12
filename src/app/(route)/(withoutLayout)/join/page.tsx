import React from 'react'

import RQProvider from '@/app/_components/RQProvider'
import { cn } from '@/app/_utils/twMerge'
import UserInfoField from './_components/UserInfoField'
import JoinHeader from './_components/JoinHeader'

export default function JoinPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F7F7F7]">
      <section
        className={cn(
          'mx-auto flex w-[610px] flex-1 flex-col gap-[69px] bg-white px-[87px]',
          'mo:w-full mo:gap-[54px] mo:px-[16px] mo:pt-[62px]',
        )}
      >
        <JoinHeader />
        <RQProvider>
          <UserInfoField />
        </RQProvider>
      </section>
    </main>
  )
}
