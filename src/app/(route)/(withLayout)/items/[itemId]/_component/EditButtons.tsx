'use client'

import Confirm from '@/app/_components/confirm'
import useDeleteReview from '@/app/_hook/api/reviews/mutations/useDeleteReview'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useState } from 'react'

interface PropsType {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
  reviewId: number
}

export default function EditButtons(props: PropsType) {
  const { setShowReviewModal, reviewId } = props

  const [showConfirm, setShowConfirm] = useState<boolean>(false)

  const { mutateAsync: deleteReview } = useDeleteReview()

  const handleDeleteReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    setShowConfirm(true)
  }

  return (
    <div
      className={cn(
        'absolute right-0 mt-2 flex h-[54px] w-[94px] flex-col bg-[#fff] text-[12px] font-[600] text-[#868585]',
        'mo:static mo:h-[12px] mo:w-full mo:flex-row mo:gap-[10px] mo:text-[#B3B3B3]',
      )}
    >
      <button
        type="button"
        className={cn(
          'flex flex-1 items-center justify-center border-b-[0.5px] border-[#EDEDED]',
          'mo:flex-none mo:border-0',
        )}
        onClick={() => {
          setShowReviewModal((prev) => !prev)
        }}
      >
        <span className="mr-[5px]">수정하기</span>
        <Image
          width={16}
          height={16}
          src="/image/icon/icon-pencil.svg"
          alt="edit review"
          className="mo:hidden"
        />
      </button>
      <span
        className={cn('hidden h-[10px] w-[1px] bg-[#B3B3B3]', 'mo:block')}
      />
      <button
        type="button"
        className={cn(
          'flex flex-1 items-center justify-center',
          'mo:flex-none',
        )}
        onClick={(e) => handleDeleteReview(e)}
      >
        <div className="mr-[5px]">삭제하기</div>
        <Image
          width={12}
          height={12}
          src="/image/icon/icon-trash_can.svg"
          alt="delete review"
          className="mo:hidden"
        />
      </button>
      {showConfirm && (
        <Confirm
          setShowConfirm={setShowConfirm}
          id={reviewId}
          title="리뷰"
          onConfirmedAction={deleteReview}
        />
      )}
    </div>
  )
}
