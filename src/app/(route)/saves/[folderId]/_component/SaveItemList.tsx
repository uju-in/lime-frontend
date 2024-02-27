'use client'

import React from 'react'
import { SaveItemType, SavePageMode } from '@/app/_types/save.type'
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
  return (
    <div className="relative grid grid-cols-[repeat(auto-fill,184px)] justify-center gap-x-[19px] gap-y-[25px]">
      {itemList.map((item) => {
        const { originalName, metadata, favoriteId } = item
        const { price, imageUrl, favoriteCount, reviewCount, itemId } =
          metadata.favoriteItemMetadata

        return (
          <SaveItem
            key={favoriteId}
            originalName={originalName}
            price={price}
            imageUrl={imageUrl}
            favoriteCount={favoriteCount}
            reviewCount={reviewCount}
            isChecked={checkedList.includes(itemId)}
            onClick={() => {
              if (mode !== SavePageMode.EDIT_LIST) return
              if (!checkedList.includes(itemId))
                setCheckedList((prev) => prev.concat(itemId))
              else setCheckedList((prev) => prev.filter((c) => c !== itemId))
            }}
          />
        )
      })}
    </div>
  )
}
