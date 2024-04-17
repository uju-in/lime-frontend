'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRef } from 'react'
import { ReviewState } from '@/app/_types/review.type'
import StarRatingFormatter from './StarRatingFormatter'
import ReviewImagesDisplay from './ReviewImagesDisplay'

interface PropsType {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onImageDelete: (
    imageIndex: number,
    isExisting: boolean,
    imageUrl: string,
  ) => void
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
  reviewState: ReviewState
  setReviewState: React.Dispatch<React.SetStateAction<ReviewState>>
}

export default function ReviewModalForm(props: PropsType) {
  const {
    onSubmit,
    setShowReviewModal,
    handleFileChange,
    onImageDelete,
    reviewState,
    setReviewState,
  } = props
  const { rating, content, existingImages, multipartReviewImages } = reviewState

  const InputRef = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={onSubmit}>
      <div
        className={cn(
          'mb-[50px] flex flex-col items-center gap-[20px]',
          'mo:items-start',
        )}
      >
        <p>상품은 만족하셨나요?</p>
        <div className="flex gap-[8px]">
          {/** 별점 입력 */}
          <StarRatingFormatter
            rating={rating}
            setRate={(newRating) =>
              setReviewState((prevState) => ({
                ...prevState,
                rating: newRating,
              }))
            }
          />
        </div>
      </div>
      <div
        className={cn(
          'flex flex-col items-center gap-[20px]',
          'mo:items-start',
        )}
      >
        <p>리뷰글을 작성해주세요.</p>
        <textarea
          name="content"
          placeholder="최소 10자 이상 작성해주세요."
          className="h-[152px] w-full resize-none border border-[#DADADA] bg-[#F4F4F4] p-[14px_12px] text-[14px] outline-none"
          onChange={(e) =>
            setReviewState((prevState) => ({
              ...prevState,
              content: e.target.value,
            }))
          }
          minLength={10}
          maxLength={1000}
          value={content}
          required
        />
        <div className="w-full mo:flex mo:gap-[8px]">
          <button
            type="button"
            onClick={() => {
              if (InputRef.current) {
                InputRef.current.click()
              }
            }}
            className={cn(
              'mb-[15px] w-full border border-dashed border-[#DADADA] py-[11px]',
              'mo:flex mo:h-[96px] mo:w-[96px] mo:flex-col mo:items-center mo:justify-center mo:gap-[4px]',
            )}
          >
            <Image
              width={24}
              height={24}
              className={cn('hidden', 'mo:block')}
              src="/image/icon/icon-camera.svg"
              alt="close"
            />
            <span className="mo:hidden">사진 첨부하기</span>
            <span
              className={cn('hidden text-[#B7B7B7] mo:text-[12px]', 'mo:block')}
            >
              {existingImages.length + multipartReviewImages.length}/5
            </span>
          </button>
          {/** Review Image List */}
          <ReviewImagesDisplay
            existingImages={existingImages}
            newImages={multipartReviewImages}
            onImageDelete={onImageDelete}
          />
        </div>
        <input
          name="multipartReviewImages"
          type="file"
          multiple
          ref={InputRef}
          className="hidden"
          onChange={handleFileChange}
          accept="image/jpeg, image/png, image/gif, image/bmp, image/svg+xml, image/tiff, image/webp"
        />
      </div>
      <div className="mt-[50px] flex w-full gap-[20px] text-[16px] font-semibold">
        <button
          type="button"
          className={cn(
            'flex-1 rounded-[4px] border border-[#DADADA] py-[12px]',
            'mo:hidden',
          )}
          onClick={() => {
            setShowReviewModal(false)
          }}
        >
          취소
        </button>
        <button
          type="submit"
          className={cn(
            'flex-1 rounded-[4px] bg-black py-[12px] text-white',
            'mo:hidden',
          )}
        >
          등록
        </button>
        <button
          type="submit"
          className={cn(
            'hidden flex-1 rounded-[4px] bg-black py-[12px] text-white',
            'mo:block',
          )}
        >
          작성 완료
        </button>
      </div>
    </form>
  )
}
