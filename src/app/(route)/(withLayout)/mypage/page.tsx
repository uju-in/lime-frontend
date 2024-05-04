import CategoryPicker from '@/app/_components/categoryPicker/CategoryPicker'
import React from 'react'
import Loading from '@/app/_components/loading'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import ErrorFallback from '@/app/_components/errorFallback'
import Profile from './_components/Profile'
import MypageNav from './_components/MypageNav'
import UserContentTabs from './_components/UserContentTabs'

type Props = {
  searchParams: {
    menu: string
    nickname: string
  }
  children: React.ReactNode
}

export default function page({ searchParams }: Props) {
  const { menu, nickname } = searchParams

  return (
    <div className="flex w-full gap-[65px]">
      <section className="flex max-w-[342px] flex-col gap-[19px]">
        <ErrorHandlingWrapper
          fallbackComponent={ErrorFallback}
          suspenseFallback={<Loading />}
        >
          <Profile />
        </ErrorHandlingWrapper>
        <MypageNav menu={menu} />
      </section>
      <section className="w-full pt-[89px]">
        <CategoryPicker path={`/mypage?nickname=${nickname}&menu=`} isMenu />
        <UserContentTabs />
      </section>
    </div>
  )
}
