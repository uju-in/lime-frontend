import CategoryPicker from '@/app/_components/categoryPicker/CategoryPicker'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import React, { Suspense } from 'react'
import Profile from './_components/Profile'
import MypageNav from './_components/MypageNav'

export default function page() {
  return (
    <div className="flex gap-[65px]">
      <section className="flex max-w-[342px] flex-col gap-[19px]">
        <Suspense fallback={<div>Loading. . .</div>}>
          <Profile />
        </Suspense>
        <MypageNav />
      </section>
      <section className="pt-[89px]">
        <CategoryPicker path="/mypage" />
      </section>
    </div>
  )
}
