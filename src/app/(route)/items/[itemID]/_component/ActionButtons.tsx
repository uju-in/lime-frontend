'use client'

import React from 'react'

import useSaveToWishlist from '@/app/_hook/api/useSaveToWishlist'

export default function ActionButtons({
  itemUrl,
  itemId,
}: {
  itemUrl: string
  itemId: number
}) {
  const { mutateAsync: saveItem } = useSaveToWishlist()

  /** 아이템 등록 */
  const handleSaveItem = async () => {
    await saveItem([itemId])
  }

  /** 구매하러 가기 */
  const handleBuyItem = () => {
    const { width } = window.screen
    const { height } = window.screen

    const options = `width=${width},height=${height},left=0,top=0`

    window.open(itemUrl, '_blank', options)
  }

  return (
    <div className="flex h-[48px] justify-between">
      <button
        type="button"
        className="w-[164px] rounded-[4px] bg-[#EDEDED] text-[14px] font-[600]"
        onClick={handleSaveItem}
      >
        아이템 담기
      </button>
      <button
        type="button"
        className="w-[292px] rounded-[4px] bg-black text-[14px] font-[600] text-[#fff]"
        onClick={handleBuyItem}
      >
        구매하러 가기
      </button>
    </div>
  )
}
