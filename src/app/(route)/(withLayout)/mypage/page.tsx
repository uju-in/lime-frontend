import CategoryPicker from '@/app/_components/categoryPicker/CategoryPicker'
import React, { Suspense } from 'react'
import Loading from '@/app/_components/loading'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import ErrorBoundary from '@/app/_components/errorBoundary'
import ErrorFallback from '@/app/_components/errorFallback'
import Profile from './_components/Profile'
import MypageNav from './_components/MypageNav'

type Props = {
  searchParams: { menu: string }
  children: React.ReactNode
}

export default function page({ searchParams }: Props) {
  const { menu } = searchParams

  return (
    <div className="flex gap-[65px]">
      <section className="flex max-w-[342px] flex-col gap-[19px]">
        <ErrorHandlingWrapper
          fallbackComponent={ErrorFallback}
          suspenseFallback={<Loading />}
        >
          <Profile />
        </ErrorHandlingWrapper>
        <MypageNav menu={menu} />
      </section>
      <section className="pt-[89px]">
        <CategoryPicker path="/mypage?menu=" isMenu />
      </section>
    </div>
  )
}
