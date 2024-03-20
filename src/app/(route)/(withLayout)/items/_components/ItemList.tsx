'use client'

import React, { useState, useEffect } from 'react'
import { ItemType } from '@/app/_types/item.type'
import useItemListData from '@/app/_hook/api/items/useItemListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { cn } from '@/app/_utils/twMerge'
import { useInView } from 'react-intersection-observer'
import SortBox from './SortBox'
import { SortOption } from '../_constants'
import Item from './Item'

export default function ItemList() {
  const [sortOption, setSortOption] = useState(SortOption[2])
  const hobbyName = useGetSearchParam('category') || '농구'
  const {
    itemList,
    itemTotalCount,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useItemListData({
    hobbyName,
    sortOption: sortOption.value,
  })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (isLoading) return <div>Loading..</div>
  if (isError) return null

  return (
    <>
      <div
        className={cn(
          'relative my-[30px] flex items-center justify-end',
          'mo:justify-between',
        )}
      >
        <span className={cn('hidden text-[12px] font-medium', 'mo:block')}>
          총 {itemTotalCount}개의 아이템
        </span>
        <SortBox sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <div
        className={cn(
          'grid grid-cols-[repeat(5,minmax(0px,1fr))] gap-x-[19px] gap-y-[25px]',
          'tablet:grid-cols-[repeat(4,minmax(0px,1fr))]',
          'mo:grid-cols-[repeat(3,minmax(0px,1fr))]',
        )}
      >
        {itemList.map((item: ItemType) => {
          return <Item item={item} key={item.cursorId} />
        })}
      </div>
      {isFetchingNextPage ? <div>Loading..</div> : <div ref={ref} />}
    </>
  )
}
