'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ItemType } from '@/app/_types/item.type'
import useItemListData from '@/app/_hook/api/items/useItemListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { useInView } from 'react-intersection-observer'
import SortBox from './SortBox'
import { SortOption } from '../_constants'
import Item from './Item'

export default function ItemList() {
  const [sortOption, setSortOption] = useState(SortOption[2])
  const hobbyName = useGetSearchParam('category') || '농구'
  const { itemList, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useItemListData({
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
      <div className="relative my-[30px] flex items-center justify-end">
        <SortBox sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,184px)] gap-x-[19px] gap-y-[25px]">
        {itemList.map((item: ItemType) => {
          return <Item item={item} key={item.cursorId} />
        })}
      </div>
      {isFetchingNextPage ? <div>Loading..</div> : <div ref={ref} />}
    </>
  )
}
