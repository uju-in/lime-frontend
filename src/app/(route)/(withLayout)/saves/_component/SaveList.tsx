'use client'

import {
  SaveFolderType,
  SaveItemType,
  SavePageMode,
} from '@/app/_types/save.type'

import React from 'react'
import { useRouter } from 'next/navigation'
import SaveFolderGroupItem from './SaveFolderGroupItem'
import { SaveItem } from '../[folderId]/_component'

interface Props {
  mode: SavePageMode
  itemList: SaveItemType[]
  folderList: SaveFolderType[]
  checkedList: number[]
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>
}

export default function SaveList({
  mode,
  itemList,
  folderList,
  checkedList,
  setCheckedList,
}: Props) {
  const router = useRouter()

  return (
    <>
      {/* 폴더 */}
      <div className="mb-[40px] grid grid-cols-[repeat(auto-fill,387px)] gap-[17px]">
        {folderList.map((item: SaveFolderType) => {
          return (
            <SaveFolderGroupItem
              key={item.favoriteId}
              id={item.favoriteId}
              folderName={item.originalName}
              imageUrls={item.metadata.folderMetadata.imageUrls}
              itemCount={item.metadata.folderMetadata.itemCount}
              disabled={mode === SavePageMode.EDIT_LIST}
            />
          )
        })}
      </div>

      {/* 단일 아이템 */}
      <div className="mb-[40px] grid grid-cols-[repeat(auto-fill,184px)] gap-[17px]">
        {itemList.map((item: SaveItemType) => {
          const { favoriteId, originalName, metadata } = item
          const { favoriteCount, reviewCount, price, imageUrl, itemId } =
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
              imageUrl={imageUrl}
              price={price}
              favoriteCount={favoriteCount}
              reviewCount={reviewCount}
              isChecked={checkedList.includes(favoriteId)}
              onClick={handleItemClick}
            />
          )
        })}
      </div>
    </>
  )
}
