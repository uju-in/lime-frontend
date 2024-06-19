'use client'

import { itemDataState } from '@/app/_atoms/itemDataState'
import Modal from '@/app/_components/modal'
import Portal from '@/app/_components/potal'
import useAddReview from '@/app/_hook/api/reviews/mutations/useAddReview'
import useEditReview from '@/app/_hook/api/reviews/mutations/useEditReview'
import { useModals } from '@/app/_hook/common/useModal'
import { ItemInfo } from '@/app/_types/item.type'
import { ReviewInfo, ReviewState } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'
import { ChangeEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
  validateForm,
  validateImage,
  validateImageSize,
} from '../_utils/validation'
import ReviewModalForm from './ReviewModalForm'
import ReviewModalHeader from './ReviewModalHeader'
import ReviewModalItemDisplay from './ReviewModalItemDisplay'

interface PropsType {
  action: 'create' | 'edit'
  reviewSummary?: ReviewInfo
}

export default function ReviewModal(props: PropsType) {
  const { action, reviewSummary } = props

  const { close } = useModals()

  /** 리뷰 작성 시 상단 아이템 정보 */
  const itemData = useRecoilValue(itemDataState) as ItemInfo

  const initialReviewState: ReviewState = {
    rating: reviewSummary?.rate || 0,
    content: reviewSummary?.content || '',
    multipartReviewImages: [],
    existingImages: reviewSummary?.imageUrls || [],
    reviewItemUrlsToRemove: [],
  }

  const [reviewState, setReviewState] =
    useState<ReviewState>(initialReviewState)

  const { mutateAsync: addReview } = useAddReview()
  const { mutateAsync: editReview } = useEditReview()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)

      if (
        !validateImageSize(filesArray) ||
        !validateImage({
          existingImages: reviewState.existingImages,
          multipartReviewImages: reviewState.multipartReviewImages,
          filesArray,
        })
      ) {
        return
      }

      setReviewState((prevState) => ({
        ...prevState,
        multipartReviewImages: [
          ...prevState.multipartReviewImages,
          ...filesArray,
        ],
      }))
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
      setReviewState((prevState) => ({
        ...prevState,
        existingImages: prevState.existingImages.filter(
          (_, index) => index !== imageIndex,
        ),
        reviewItemUrlsToRemove: [...prevState.reviewItemUrlsToRemove, imageUrl],
      }))
    } else {
      setReviewState((prevState) => ({
        ...prevState,
        multipartReviewImages: prevState.multipartReviewImages.filter(
          (_, index) => index !== imageIndex,
        ),
      }))
    }
  }

  /** 리뷰 등록/수정 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      (action === 'create' &&
        !validateForm({
          multipartReviewImages: reviewState.multipartReviewImages,
          rating: reviewState.rating,
          content: reviewState.content,
        })) ||
      (action === 'edit' &&
        !validateImage({
          multipartReviewImages: reviewState.multipartReviewImages,
          existingImages: reviewState.existingImages,
        }))
    ) {
      return
    }

    const formData = new FormData()
    reviewState.multipartReviewImages.forEach((file) => {
      formData.append('multipartReviewImages', file)
    })
    formData.append('rating', reviewState.rating.toString())
    formData.append('content', reviewState.content)
    formData.append('itemId', itemData.id.toString())

    if (action === 'edit') {
      reviewState.reviewItemUrlsToRemove.forEach((imageUrl) => {
        formData.append('reviewItemUrlsToRemove', imageUrl)
      })
    }

    const reviewId = reviewSummary?.reviewId as number
    const status =
      action === 'create'
        ? await addReview({ itemId: itemData.id, formData })
        : await editReview({ reviewId, formData })

    if (status === 200) {
      close()
    }
  }

  return (
    <Portal title="review-modal">
      <Modal innerClassNames="mo:top-0 mo:max-w-full mo:max-h-full mo:-translate-y-0 mo:rounded-[0px]">
        <article
          className={cn(
            'w-[590px] p-[13px_0_45px]',
            'mo:w-full mo:px-[16px] mo:pb-[112px]',
          )}
        >
          <ReviewModalHeader />
          <div className={cn('mt-[34px] px-[41px]', 'mo:p-0')}>
            <ReviewModalItemDisplay />
            <ReviewModalForm
              onSubmit={handleSubmit}
              handleFileChange={handleFileChange}
              onImageDelete={handleImageDelete}
              reviewState={reviewState}
              setReviewState={setReviewState}
            />
          </div>
        </article>
      </Modal>
    </Portal>
  )
}
