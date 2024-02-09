'use client'

import React, { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image'

import { ReviewInfo } from '@/app/_types/review.type'

import Modal from '@/app/_components/modal'
import useAddReview from '@/app/_hook/api/useAddReview'
import StarRatingFormatter from './StarRatingFormatter'

import { validateForm } from '../_utils/validation'

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

interface ReviewFormState {
  rating: number
  content: string
  multipartReviewImages: File[]
}

export default function ReviewModal(props: PropsType) {
  const { setShowReviewModal, itemData, action, review } = props

  const { name: itemName, price: itemPrice, image: itemImage } = itemData

  const InputRef = useRef<HTMLInputElement>(null)

  const [reviewInfo, setReviewInfo] = useState<ReviewFormState>({
    rating: review?.rate || 0,
    content: review?.content || '',
    multipartReviewImages: [],
  })

  console.log(review)

  // useEffect(() => {
  //   if (review) {
  //     setReviewInfo({
  //       rating: review.rate,
  //       content: review.content,
  //       multipartReviewImages: review.imageUrls,
  //     })
  //   }
  // }, [review])

  const { mutateAsync: addReview } = useAddReview()

  /** 별점, 본문, 이미지 업로드 관련 */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement
    const { name, value, files, type } = target

    if (type === 'file' && files) {
      const filesList = Array.from(files) as File[]

      setReviewInfo((prevState) => ({
        ...prevState,
        multipartReviewImages: [
          ...prevState.multipartReviewImages,
          ...filesList,
        ],
      }))
    } else {
      setReviewInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
    console.log(files)
  }

  /** 리뷰 등록 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(reviewInfo)

    // if (!validateForm(reviewInfo)) {
    //   return
    // }

    // const formData = new FormData()

    // reviewInfo.multipartReviewImages.forEach((file) => {
    //   formData.append('multipartReviewImages', file)
    // })
    // formData.append('rating', reviewInfo.rating.toString())
    // formData.append('content', reviewInfo.content)

    // const status = await addReview({ itemId: 161, formData })

    // if (status === 200) {
    //   setShowReviewModal(false)
    // }
  }

  return (
    <Modal>
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
              <StarRatingFormatter
                rating={reviewInfo.rating}
                setRate={(rating) => setReviewInfo({ ...reviewInfo, rating })}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <p>리뷰글을 작성해주세요.</p>
            <textarea
              name="content"
              placeholder="최소 10자 이상 작성해주세요."
              className="h-[152px] w-[508px] max-w-full resize-none border border-[#DADADA] bg-[#F4F4F4] p-[14px_12px] text-[14px] outline-none"
              onChange={handleChange}
              minLength={10}
              value={reviewInfo.content}
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
              <div className="flex w-[508px] gap-[6px] overflow-x-auto  whitespace-nowrap">
                <div className="relative">
                  <div className="h-[96px] min-w-[96px] flex-shrink-0 bg-[#D2D2D2]" />
                  <button
                    type="button"
                    className="absolute right-0 top-0 h-[28px] w-[28px] bg-[#000] text-[16px] text-[#fff] opacity-[0.7]"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
            <input
              name="multipartReviewImages"
              type="file"
              multiple
              ref={InputRef}
              className="hidden"
              onChange={handleChange}
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
