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
    setIsSelected(!isSelected)

    if (!isSelected) {
      setCurrentSelectedItem(memberItemMetadata)
    } else {
      setCurrentSelectedItem(null)
    }
  }

  return (
    <div
      className={`${
        isSelected ? 'bg-[#e0e0e0]' : 'bg-[#fff]'
      } w-[107px] cursor-pointer text-start`}
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
