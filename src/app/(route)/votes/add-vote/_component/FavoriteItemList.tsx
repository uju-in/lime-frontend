import React, { useState } from 'react'

import {
  MemberItemMetadata,
  MetadataType,
  SaveItemType,
} from '@/app/_types/saveItem.type'

import ItemCard from './FavoriteItem'

interface PropsType {
  favoriteInfos: SaveItemType[]
  folderId: number | null
  currentSelectedItem: MemberItemMetadata | null
  setCurrentSelectedItem: React.Dispatch<
    React.SetStateAction<MemberItemMetadata | null>
  >
}

export default function FavoriteList(props: PropsType) {
  const {
    favoriteInfos,
    folderId,
    currentSelectedItem,
    setCurrentSelectedItem,
  } = props
  /** 아이템 선택 여부 */
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <div className="grid grid-cols-3 gap-x-[10px] gap-y-[20px]">
      {favoriteInfos
        ?.filter((item) => item.type === 'ITEM' && item.favoriteId === folderId)
        .map((item) => {
          const { metadata } = item
          const { memberItemMetadata } = metadata as MetadataType

          return (
            <ItemCard
              key={item.favoriteId}
              favoriteInfo={item}
              setCurrentSelectedItem={setCurrentSelectedItem}
              isSelected={
                isSelected &&
                currentSelectedItem?.itemId === memberItemMetadata.itemId
              }
              setIsSelected={setIsSelected}
            />
          )
        })}
    </div>
  )
}
