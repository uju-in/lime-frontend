'use client'

import Image from 'next/image'
import {
  CurrentFavoriteItemMetadata,
  FavoriteItemMetadata,
  MetadataType,
  SaveItemType,
} from '@/app/_types/saveItem.type'
import { useFavoritesList } from '@/app/_hook/api/votes/useFavoritesList'
import { cn } from '@/app/_utils/twMerge'
import { useCallback } from 'react'

interface PropsType {
  folderId: number | null
  currentSelectedItem: CurrentFavoriteItemMetadata | null
  setCurrentSelectedItem: React.Dispatch<
    React.SetStateAction<CurrentFavoriteItemMetadata | null>
  >
}

export default function FavoriteList(props: PropsType) {
  const { folderId, currentSelectedItem, setCurrentSelectedItem } = props

  const { itemList, isError, isSuccess } = useFavoritesList('item', folderId)

  const handleSelectItem = useCallback(
    (favoriteItemMetadata: FavoriteItemMetadata, originalName: string) => {
      const isSelected =
        favoriteItemMetadata.itemId === currentSelectedItem?.itemId

      if (!isSelected) {
        setCurrentSelectedItem({
          ...favoriteItemMetadata,
          originalName,
        })
      } else {
        setCurrentSelectedItem(null)
      }
    },
    [currentSelectedItem, setCurrentSelectedItem],
  )

  if (isError) {
    return <div>Error . . .</div>
  }

  if (isSuccess) {
    return (
      <div className="grid grid-cols-3 gap-x-[10px] gap-y-[20px]">
        {itemList.favoriteInfos.map((item: SaveItemType) => {
          const { metadata, originalName } = item
          const { favoriteItemMetadata } = metadata as MetadataType

          return (
            <div
              key={item.favoriteId}
              className={cn('w-[107px] cursor-pointer text-start ', {
                'bg-[#e0e0e0]':
                  currentSelectedItem?.itemId === favoriteItemMetadata.itemId,
                'bg-[#fff]':
                  currentSelectedItem?.itemId !== favoriteItemMetadata.itemId,
              })}
              onClick={() =>
                handleSelectItem(favoriteItemMetadata, originalName)
              }
            >
              <Image
                width={107}
                height={107}
                src={favoriteItemMetadata.imageUrl}
                alt="item image"
              />
              <div className="h-[70px] text-[10px] font-[500]">
                <p>{originalName}</p>
                <strong className="font-[700]">
                  {favoriteItemMetadata.price.toLocaleString()}원
                </strong>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
