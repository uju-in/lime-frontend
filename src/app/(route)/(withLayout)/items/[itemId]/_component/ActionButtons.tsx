'use client'

import useAddFavorites from '@/app/_hook/api/items/useSaveToWishlist'
import { cn } from '@/app/_utils/twMerge'

interface PropsType {
  itemUrl: string
  itemId: number
}

export default function ActionButtons(props: PropsType) {
  const { itemUrl, itemId } = props

  const { mutateAsync: saveToWishlist } = useAddFavorites()

  /** 아이템 등록 */
  const handleSaveItem = () => {
    saveToWishlist([itemId])
  }

  /** 구매하러 가기 */
  const handleBuyItem = () => {
    const { width } = window.screen
    const { height } = window.screen

    const options = `width=${width},height=${height},left=0,top=0`

    window.open(itemUrl, '_blank', options)
  }

  return (
    <div
      className={cn(
        'flex justify-between',
        'mo:fixed mo:bottom-0 mo:right-0 mo:z-50 mo:h-[68px] mo:w-full mo:items-center mo:justify-center mo:gap-[8px] mo:border mo:bg-white mo:px-[16px]',
      )}
    >
      <button
        type="button"
        className="h-[48px] w-[164px] rounded-[4px] bg-[#EDEDED] text-[14px] font-[600]"
        onClick={handleSaveItem}
      >
        아이템 담기
      </button>
      <button
        type="button"
        className="h-[48px] w-[292px] rounded-[4px] bg-black text-[14px] font-[600] text-[#fff]"
        onClick={handleBuyItem}
      >
        구매하러 가기
      </button>
    </div>
  )
}
