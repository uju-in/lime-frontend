'use client'

import { currentSelectedItemState } from '@/app/_atoms/currentSelectedItemState'
import { useFavoritesList } from '@/app/_hook/api/votes/queries/useFavoritesList'
import {
  FavoriteItemMetadata,
  MetadataType,
  SaveItemType,
} from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { truncateString } from '../../_utils/truncateString'

interface PropsType {
  folderId: number | null
}

export default function FavoriteList(props: PropsType) {
  const { folderId } = props

  const { itemList } = useFavoritesList('item', folderId)

  const [currentSelectedItem, setCurrentSelectedItem] = useRecoilState(
    currentSelectedItemState,
  )

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

  return (
    <div
      className={cn(
        'grid grid-cols-3 gap-x-[10px] gap-y-[20px]',
        'mo:w-full mo:place-items-center mo:gap-x-[2px] mo:p-[16px]',
      )}
    >
      {itemList.favoriteInfos.map((item: SaveItemType) => {
        const { metadata, originalName } = item
        const { favoriteItemMetadata } = metadata as MetadataType

        return (
          <div
            key={item.favoriteId}
            className="w-[107px] cursor-pointer text-start"
            onClick={() => handleSelectItem(favoriteItemMetadata, originalName)}
          >
            <div className="relative">
              <Image
                width={107}
                height={107}
                src={favoriteItemMetadata.imageUrl}
                alt="item image"
              />
              {currentSelectedItem?.itemId === favoriteItemMetadata.itemId && (
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#6F6F6F] opacity-80" />
              )}
            </div>
            <div className="text-[10px] font-[500]">
              <span className="block pb-[4px]">
                {truncateString(originalName, 26)}
              </span>
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
