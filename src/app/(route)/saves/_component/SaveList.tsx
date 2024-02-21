'use client'

import useSaveList from '@/app/_hook/api/useSavesList'
import {
  SaveFolderType,
  SaveItemType,
  SavePageMode,
} from '@/app/_types/save.type'

import React from 'react'
import SaveFolderGroupItem from './SaveFolderGroupItem'
import { SaveItem } from '../[folderName]/_component'
import ActionButtons from '../../items/[itemID]/_component/ActionButtons'

interface Props {
  mode: SavePageMode
  checkedList: number[]
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>
}

export default function SaveList({ mode, checkedList, setCheckedList }: Props) {
  const { data, isLoading, isError } = useSaveList()
  if (isLoading) return <div>...loading</div>
  if (isError) return null

  const folderList = data.favoriteInfos.filter(
    (item: any) => item.type === 'FOLDER',
  )

  const itemList = data.favoriteInfos.filter(
    (item: any) => item.type === 'ITEM',
  )

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

          return (
            <SaveItem
              key={favoriteId}
              originalName={originalName}
              imageUrl={imageUrl}
              price={price}
              favoriteCount={favoriteCount}
              reviewCount={reviewCount}
              isChecked={checkedList.includes(itemId)}
              onClick={() => {
                if (mode !== SavePageMode.EDIT_LIST) {
                  return
                }
                if (!checkedList.includes(itemId))
                  setCheckedList((prev) => prev.concat(itemId))
                else setCheckedList((prev) => prev.filter((c) => c !== itemId))
              }}
            />
          )
        })}
      </div>
    </>
  )
}
