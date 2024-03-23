'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ItemType } from '@/app/_types/item.type'
import useItemListData from '@/app/_hook/api/items/useItemListData'
import { cn } from '@/app/_utils/twMerge'
import { useInView } from 'react-intersection-observer'
import { SortOption } from '../_constants'
import SortBox from './SortBox'
import { SearchItem } from './SearchItem'

export default function SearchItemList({ keyword }: { keyword: string }) {
  const [sortOption, setSortOption] = useState(SortOption[2])
  const { itemList, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useItemListData({
      sortOption: sortOption.value,
      keyword,
    })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (isLoading) return <div>Loading..</div>
  if (isError) return null

  if (!itemList.length)
    return (
      <div className="my-[136px] flex flex-col gap-[30px] text-center">
        <p className="text-[20px]">아이템 검색 결과가 없어요.</p>
        <Link
          href="/items/add-item"
          className="flex items-center justify-center gap-[6px] text-[16px] text-[#858585]"
        >
          <Image
            className="mb-[2px]"
            src="/image/icon/icon-plus_858585.svg"
            alt="plus"
            width={12}
            height={12}
          />
          <span className="text-[16px] font-semibold">아이템 생성하러가기</span>
        </Link>
      </div>
    )

  return (
    <>
      <div
        className={cn(
          'relative my-[30px] flex items-center justify-between',
          'mo:mb-[12px] mo:mt-[16px]',
        )}
      >
        <p className="text-[14px] font-medium">
          총 {itemList.length}개의 아이템
        </p>
        <SortBox sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,184px)] gap-x-[19px] gap-y-[25px]">
        {itemList.map((item: ItemType) => {
          return <SearchItem item={item} key={item.cursorId} />
        })}
      </div>
      {isFetchingNextPage ? <div>Loading..</div> : <div ref={ref} />}
    </>
  )
}
