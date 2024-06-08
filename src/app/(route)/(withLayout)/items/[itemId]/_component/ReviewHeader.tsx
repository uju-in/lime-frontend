'use client'

import { useModals } from '@/app/_hook/common/useModal'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import ReviewModal from './ReviewModal'

interface PropsType {
  totalReviewCount: number
}

export default function ReviewHeader({ totalReviewCount }: PropsType) {
  const { open } = useModals()

  const handleOpenModal = () => {
    open(ReviewModal, {
      action: 'create',
    })
  }

  return (
    <header
      className={cn(
        'flex h-[42px] justify-between border-b-2 border-b-[#000]',
        'mo:border-0',
      )}
    >
      <strong className="text-[18px] font-[600]">
        리뷰 ({totalReviewCount})
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
          onClick={handleOpenModal}
        >
          리뷰 작성
        </button>
      </span>
    </header>
  )
}
