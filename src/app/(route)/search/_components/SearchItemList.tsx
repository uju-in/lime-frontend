'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ItemType } from '@/app/_types/item.type'
import useItemListData from '@/app/_hook/api/items/useItemListData'
import { useInView } from 'react-intersection-observer'
import { SortOption } from '../_constants'
import SortBox from './SortBox'

export function Item({ item }: { item: ItemType }) {
  const { name, price, id, image, createdAt, favoriteCount, reviewCount } =
    item.itemSummary
  const router = useRouter()

  const handleItemClick = () => {
    router.push(`/items/${id}`)
  }

  return (
    <div className="flex w-[184px] flex-col gap-[7px] text-[14px]">
      <Image
        onClick={handleItemClick}
        className="cursor-pointer rounded-[8px]"
        src={image}
        alt="item-image"
        width={184}
        height={184}
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
      <div className="relative my-[30px] flex items-center justify-between">
        <p className="text-[14px] font-medium">
          총 {itemList.length}개의 아이템
        </p>
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
