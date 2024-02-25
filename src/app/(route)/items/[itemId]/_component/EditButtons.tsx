'use client'

import React from 'react'
import Image from 'next/image'
import useDeleteReview from '@/app/_hook/api/reviews/useDeleteReview'

interface PropsType {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
  reviewId: number
}

export default function EditButtons(props: PropsType) {
  const { setShowReviewModal, reviewId } = props

  const { mutateAsync: deleteReview } = useDeleteReview()

  const handleDeleteReview = async () => {
    await deleteReview(reviewId)
  }

  return (
    <div className="absolute right-0 mt-2 flex h-[54px] w-[94px] flex-col bg-[#fff] text-[12px] font-[600] text-[#868585]">
      <button
        type="button"
        className="flex flex-1 items-center justify-center border-b-[0.5px] border-[#EDEDED]"
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
        />
      </button>
      <button
        type="button"
        className="flex flex-1 items-center justify-center"
        onClick={handleDeleteReview}
      >
        <span className="mr-[5px]">삭제하기</span>
        <Image
          width={12}
          height={12}
          src="/image/icon/icon-trash_can.svg"
          alt="delete review"
        />
      </button>
    </div>
  )
}
