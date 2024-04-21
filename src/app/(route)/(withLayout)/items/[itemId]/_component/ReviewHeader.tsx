'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

interface PropsType {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
  itemReviewTotalCount: number
}

export default function ReviewHeader({
  setShowReviewModal,
  itemReviewTotalCount,
}: PropsType) {
  return (
    <header
      className={cn(
        'flex h-[42px] justify-between border-b-2 border-b-[#000]',
        'mo:border-0',
      )}
    >
      <strong className="text-[18px] font-[600]">
        리뷰 ({itemReviewTotalCount})
      </strong>
      <span className="flex items-center font-[600] text-[#3F3F3F]">
        <Image
          width={14}
          height={14}
          src="/image/icon/icon-pencil.svg"
          alt="write review"
        />
        <button
          type="button"
          className="flex items-center text-[14px] font-[600]"
          onClick={() => {
            setShowReviewModal((prev) => !prev)
          }}
        >
          리뷰 작성
        </button>
      </span>
    </header>
  )
}
