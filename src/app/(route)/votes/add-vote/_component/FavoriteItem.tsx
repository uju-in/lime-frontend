'use client'

import React from 'react'
import Image from 'next/image'

import {
  MemberItemMetadata,
  MetadataType,
  SaveItemType,
} from '@/app/_types/saveItem.type'

interface PropsType {
  favoriteInfo: SaveItemType
  setCurrentSelectedItem: React.Dispatch<
    React.SetStateAction<MemberItemMetadata | null>
  >
  isSelected: boolean
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FavoriteItem(props: PropsType) {
  const { favoriteInfo, isSelected, setCurrentSelectedItem, setIsSelected } =
    props
  const { originalName, metadata } = favoriteInfo
  const { memberItemMetadata } = metadata as MetadataType
  console.log(memberItemMetadata)

  const handleSelectItem = () => {
    setCurrentSelectedItem(memberItemMetadata)
    setIsSelected(false)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`${
        isSelected ? 'bg-[#DADADA]' : 'bg-[#fff]'
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
