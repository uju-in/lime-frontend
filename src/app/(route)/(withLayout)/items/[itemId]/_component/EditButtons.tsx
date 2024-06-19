'use client'

import Confirm from '@/app/_components/confirm'
import useDeleteReview from '@/app/_hook/api/reviews/mutations/useDeleteReview'
import { useModals } from '@/app/_hook/common/useModal'
import { ReviewInfo } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useState } from 'react'
import ReviewModal from './ReviewModal'

interface PropsType {
  reviewSummary: ReviewInfo
}

export default function EditButtons(props: PropsType) {
  const { reviewSummary } = props

  const [showConfirm, setShowConfirm] = useState<boolean>(false)

  const { open } = useModals()

  const { mutateAsync: deleteReview } = useDeleteReview()

  /** 리뷰 삭제 */
  const handleDeleteReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    setShowConfirm(true)
  }

  /** 리뷰 수정 */
  const handleOpenModal = () => {
    open(ReviewModal, {
      action: 'edit',
      reviewSummary,
    })
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
        onClick={handleOpenModal}
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
          id={reviewSummary.reviewId}
          title="리뷰"
          onConfirmedAction={deleteReview}
        />
      )}
    </div>
  )
}
