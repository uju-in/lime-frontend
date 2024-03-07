'use client'

import React from 'react'
import { SaveItemType, SavePageMode } from '@/app/_types/save.type'
import { useRouter } from 'next/navigation'
import SaveItem from './SaveItem'

interface Props {
  mode: SavePageMode
  itemList: SaveItemType[]
  checkedList: number[]
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>
}

export default function SaveItemList({
  mode,
  itemList,
  checkedList,
  setCheckedList,
}: Props) {
  const router = useRouter()

  return (
    <div className="relative grid grid-cols-[repeat(auto-fill,184px)] justify-center gap-x-[19px] gap-y-[25px]">
      {itemList.map((item) => {
        const { originalName, metadata, favoriteId } = item
        const { price, imageUrl, favoriteCount, reviewCount, itemId } =
          metadata.favoriteItemMetadata

        const handleItemClick = () => {
          if (mode !== SavePageMode.EDIT_LIST) {
            router.push(`/items/${itemId}`)
            return
          }
          if (!checkedList.includes(favoriteId)) {
            setCheckedList((prev) => prev.concat(favoriteId))
          } else {
            setCheckedList((prev) => prev.filter((c) => c !== favoriteId))
          }
        }

        return (
          <SaveItem
            key={favoriteId}
            originalName={originalName}
            price={price}
            imageUrl={imageUrl}
            favoriteCount={favoriteCount}
            reviewCount={reviewCount}
            isChecked={checkedList.includes(favoriteId)}
            onClick={handleItemClick}
          />
        )
      })}
    </div>
  )
}
