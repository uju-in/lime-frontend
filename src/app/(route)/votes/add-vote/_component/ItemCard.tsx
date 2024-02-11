'use client'

import React from 'react'
import Image from 'next/image'

import { MemberItemMetadata, SaveItemType } from '@/app/_types/saveItem.type'

interface ItemCardProps {
  itemInfo: SaveItemType
  setCurrentIsSelectItem: (currentItemId: number) => void
}

export default function ItemCard({
  itemInfo,
  setCurrentIsSelectItem,
}: ItemCardProps) {
  const { originalName, metadata } = itemInfo
  const { memberItemMetadata } = metadata as MemberItemMetadata

  return (
    <button
      type="button"
      className="flex w-[107px] flex-col justify-between"
      onClick={() => setCurrentIsSelectItem(memberItemMetadata.itemId)}
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
    </button>
  )
}
