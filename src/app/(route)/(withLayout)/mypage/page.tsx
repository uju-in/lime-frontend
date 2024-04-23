import CategoryPicker from '@/app/_components/categoryPicker/CategoryPicker'
import React, { Suspense } from 'react'
import Profile from './_components/Profile'
import MypageNav from './_components/MypageNav'

type Props = {
  searchParams: { menu: string }
}

export default function page({ searchParams }: Props) {
  const { menu } = searchParams

  return (
    <div className="flex gap-[65px]">
      <section className="flex max-w-[342px] flex-col gap-[19px]">
        <Suspense fallback={<div>Loading. . .</div>}>
          <Profile />
        </Suspense>
        <MypageNav menu={menu} />
      </section>
      <section className="pt-[89px]">
        <CategoryPicker path="/mypage?menu=" isMenu />
      </section>
    </div>
  )
}
