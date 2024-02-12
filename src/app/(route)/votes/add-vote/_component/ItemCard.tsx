'use client'

import React from 'react'
import Image from 'next/image'

import { MemberItemMetadata, SaveItemType } from '@/app/_types/saveItem.type'

interface PropsType {
  itemInfo: SaveItemType
  setCurrentSelectedItem: (currentItemId: number) => void
  isSelected: boolean
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ItemCard(props: PropsType) {
  const { itemInfo, isSelected, setCurrentSelectedItem, setIsSelected } = props
  const { originalName, metadata, favoriteId } = itemInfo
  const { memberItemMetadata } = metadata as MemberItemMetadata

  const handleSelectItem = () => {
    setCurrentSelectedItem(memberItemMetadata.itemId)
    setIsSelected(false)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`${
        isSelected ? 'bg-[#E5E5E5]' : 'bg-[#fff]'
      } flex w-[107px] cursor-pointer flex-col  justify-between text-start`}
      onClick={handleSelectItem}
    >
      <Image
        width={107}
        height={107}
        src={memberItemMetadata.imageUrl}
        alt="item image"
      />
      <div className="h-[70px] text-[10px] font-[500]">
        <p>{originalName}</p>
        <strong className="font-[700]">
          {memberItemMetadata.price.toLocaleString()}원
        </strong>
      </div>
    </div>
  )
}
