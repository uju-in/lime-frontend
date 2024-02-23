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

export function Item({ item }: { item: ItemType }) {
  const { name, price, id, image, createdAt, favoriteCount, reviewCount } =
    item.itemSummary
  const router = useRouter()

  const handleItemClick = () => {
    router.push(`/items/${id}`)
  }

  return (
    <div className="flex w-[150px] flex-col gap-[7px] text-[14px]">
      <Image
        onClick={handleItemClick}
        className="cursor-pointer rounded-[8px]"
        src={image}
        alt="item-image"
        width={150}
        height={150}
      />
      <div
        onClick={handleItemClick}
        className="line-clamp-2 h-[42px] cursor-pointer text-[#515151] hover:underline"
      >
        {name}
      </div>
      <strong>{price.toLocaleString()}원</strong>
      <div className="flex gap-[20px] text-[13px] text-[#6F6F6F]">
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-save.svg"
            alt="save"
            width={18}
            height={18}
          />
          <div>{favoriteCount}</div>
        </div>
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-review.svg"
            alt="review"
            width={18}
            height={18}
          />
          <div>{reviewCount}</div>
        </div>
      </div>
    </div>
  )
}

export default function ItemList() {
  const [sortOption, setSortOption] = useState(SortOption[2])
  const keyword = useGetSearchParam('category') || '농구'
  const {
    data,
    itemList,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useItemListData({
    keyword,
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
      <div className="grid grid-cols-[repeat(auto-fill,150px)] gap-x-[10px] gap-y-[25px]">
        {itemList.map((item: ItemType) => {
          return <Item item={item} key={item.cursorId} />
        })}
      </div>
      {isFetchingNextPage ? <div>Loading..</div> : <div ref={ref} />}
    </>
  )
}
