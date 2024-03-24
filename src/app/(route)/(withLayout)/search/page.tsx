import { cn } from '@/app/_utils/twMerge'
import React from 'react'
import SearchItemList from './_components/SearchItemList'

type Props = {
  searchParams: { keyword: string }
}

export default function page({ searchParams }: Props) {
  const { keyword } = searchParams

  return (
    <>
      <h1
        className={cn('block text-[24px] font-bold', 'mo:hidden')}
      >{`'${keyword}' 검색 결과`}</h1>
      <SearchItemList keyword={keyword} />
    </>
  )
}
