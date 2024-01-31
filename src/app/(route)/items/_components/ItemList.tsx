'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ItemType } from '@/app/_types/item.type'
import useItemListData from '@/app/_hook/api/useItemListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import SortBox from './SortBox'
import { SortOption } from '../_constants'

export function Item({ item }: { item: ItemType }) {
  const { name, price, id, image, createdAt, favoriteCount, reviewCount } =
    item.itemSummary

  return (
    <div className="flex w-[150px] flex-col gap-[7px] text-[14px]">
      <Image
        className="cursor-pointer rounded-[8px]"
        src={image}
        alt="item-image"
        width={150}
        height={150}
      />
      <div className="line-clamp-2 h-[42px] cursor-pointer text-[#515151] hover:underline">
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
  const { itemList, isLoading, isError } = useItemListData(
    keyword,
    sortOption.value,
  )

  if (isLoading) return <div>Loading..</div>
  if (isError) return null

  const { items } = itemList

  return (
    <>
      <div className="relative my-[30px] flex items-center justify-end">
        <SortBox sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,150px)] gap-x-[10px] gap-y-[25px]">
        {items.map((item: ItemType) => {
          return <Item item={item} key={item.cursorId} />
        })}
      </div>
    </>
  )
}
