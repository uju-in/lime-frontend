'use client'

import React from 'react'

export function ActionButtons({ itemUrl }: { itemUrl: string }) {
  const handleBuyItem = () => {
    const { width } = window.screen
    const { height } = window.screen

    const options = `width=${width},height=${height},left=0,top=0`

    window.open(itemUrl, '_blank', options)
  }

  return (
    <div className="flex h-[48px] justify-between">
      <button
        className="w-[164px] rounded-[4px] bg-[#EDEDED] text-[14px] font-[600]"
        type="button"
      >
        아이템 담기
      </button>
      <button
        className="w-[292px] rounded-[4px] bg-black text-[14px] font-[600] text-[#fff]"
        type="button"
        onClick={handleBuyItem}
      >
        구매하러 가기
      </button>
    </div>
  )
}
