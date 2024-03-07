import RQProvider from '@/app/_components/RQProvider'
import React from 'react'
import SearchItemList from './_components/SearchItemList'

type Props = {
  searchParams: { keyword: string }
}

export default function page({ searchParams }: Props) {
  const { keyword } = searchParams

  return (
    <div className="mx-auto w-[1200px]">
      <h1 className="text-[24px] font-bold">{`'${keyword}' 검색 결과`}</h1>
      <RQProvider>
        <SearchItemList keyword={keyword} />
      </RQProvider>
    </div>
  )
}
