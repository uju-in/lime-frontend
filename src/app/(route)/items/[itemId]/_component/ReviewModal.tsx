'use client'

import React, { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image'

import { ReviewInfo } from '@/app/_types/review.type'

import useAddReview from '@/app/_hook/api/reviews/useAddReview'
import useEditReview from '@/app/_hook/api/reviews/useEditReview'

import Modal from '@/app/_components/modal'
import StarRatingFormatter from './StarRatingFormatter'
import ReviewImagesDisplay from './ReviewImagesDisplay'

import { validateForm, validateImage } from '../_utils/validation'

interface PropsType {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
  itemData: {
    id: number
    name: string
    price: number
    image: string
  }
  action: 'create' | 'edit'
  review?: ReviewInfo
}

export default function ReviewModal(props: PropsType) {
  const { setShowReviewModal, itemData, action, review } = props

  const {
    name: itemName,
    price: itemPrice,
    image: itemImage,
    id: itemId,
  } = itemData

  const InputRef = useRef<HTMLInputElement>(null)

  const [rating, setRating] = useState<number>(review?.rate || 0)
  const [content, setContent] = useState<string>(review?.content || '')
  const [multipartReviewImages, setMultipartReviewImages] = useState<File[]>([])
  const [existingImages, setExistingImages] = useState<string[]>(
    review?.imageUrls || [],
  )
  const [reviewItemUrlsToRemove, setReviewItemUrlsToRemove] = useState<
    string[]
  >([])

  const { mutateAsync: addReview } = useAddReview()
  const { mutateAsync: editReview } = useEditReview()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)

      setMultipartReviewImages((prev) => [...prev, ...filesArray])
    }
  }

  /*
   * 이미지 제거
      기존(reviewItemUrlsToRemove)/신규(multipartReviewImages)
  */
  const handleImageDelete = (
    imageIndex: number,
    isExisting: boolean,
    imageUrl: string,
  ) => {
    if (isExisting) {
      setExistingImages((prev) =>
        prev.filter((_, index) => index !== imageIndex),
      )
      setReviewItemUrlsToRemove((prev) => [...prev, imageUrl])
    } else {
      URL.revokeObjectURL(imageUrl)

      setMultipartReviewImages((prev) =>
        prev.filter((_, index) => index !== imageIndex),
      )
    }
  }

  /** 리뷰 등록/수정 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      action === 'create' &&
      !validateForm({ multipartReviewImages, rating })
    ) {
      return
    }

    if (
      action === 'edit' &&
      !validateImage({ multipartReviewImages, existingImages })
    ) {
      return
    }

    const formData = new FormData()

    multipartReviewImages.forEach((file) => {
      formData.append('multipartReviewImages', file)
    })
    formData.append('rating', rating.toString())
    formData.append('content', content)

    if (action === 'edit') {
      reviewItemUrlsToRemove.forEach((imageUrl) => {
        formData.append('reviewItemUrlsToRemove', imageUrl)
      })
    } else {
      formData.append('itemId', itemId.toString())
    }

    const reviewId = review?.reviewId as number

    const status =
      action === 'create'
        ? await addReview({ itemId, formData })
        : await editReview({ reviewId, formData })

    if (status === 200) {
      setShowReviewModal(false)
    }
  }

  return (
    <Modal isScrollActive>
      <form className="p-[13px_0_45px]" onSubmit={handleSubmit}>
        <div className="flex justify-between border-b px-[23px] py-[18px]">
          <div className="w-[36px]" />
          <p className="w-full text-center text-[24px]">리뷰작성</p>
          <button
            type="button"
            aria-label="close"
            onClick={() => {
              setShowReviewModal(false)
            }}
          >
            <Image
              width={36}
              height={36}
              className=""
              src="/image/icon/icon-close.svg"
              alt="close"
            />
          </button>
        </div>
        <div className="mt-[34px] px-[41px]">
          {/** 아이템 정보 */}
          <div className="mb-[40px] flex gap-[20px] rounded-[8px] bg-[#F4F4F4] p-[20px]">
            <Image
              width={80}
              height={80}
              className="rounded-[3.736px]"
              src={itemImage}
              alt="item image"
            />
            <div className="flex flex-col justify-center gap-[18px]">
              <div className="text-[18px]">{itemName}</div>
              <strong className="text-[20px] font-semibold">
                {itemPrice.toLocaleString()}원
              </strong>
            </div>
          </div>
          {/** 리뷰 작성 */}
          <div className="mb-[50px] flex flex-col items-center gap-[20px]">
            <p>상품은 만족하셨나요?</p>
            <div className="flex gap-[8px]">
              {/** 별점 입력 */}
              <StarRatingFormatter rating={rating} setRate={setRating} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <p>리뷰글을 작성해주세요.</p>
            <textarea
              name="content"
              placeholder="최소 10자 이상 작성해주세요."
              className="h-[152px] w-[508px] max-w-full resize-none border border-[#DADADA] bg-[#F4F4F4] p-[14px_12px] text-[14px] outline-none"
              onChange={(e) => setContent(e.target.value)}
              minLength={10}
              value={content}
              required
            />
            <button
              type="button"
              onClick={() => {
                if (InputRef.current) {
                  InputRef.current.click()
                }
              }}
              className="w-full border border-dashed border-[#DADADA] py-[11px]"
            >
              사진 첨부하기
            </button>
            {/** 이미지 목록 */}
            {action === 'edit' && (
              <ReviewImagesDisplay
                existingImages={existingImages}
                newImages={multipartReviewImages}
                onImageDelete={handleImageDelete}
              />
            )}
            <input
              name="multipartReviewImages"
              type="file"
              multiple
              ref={InputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className="mt-[50px] flex w-full gap-[20px] text-[16px] font-semibold">
            <button
              type="button"
              className="flex-1 rounded-[4px] border border-[#DADADA] py-[12px]"
              onClick={() => {
                setShowReviewModal(false)
              }}
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 rounded-[4px] bg-black py-[12px] text-white"
            >
              등록
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
