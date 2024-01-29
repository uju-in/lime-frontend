'use client'

import React, { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image'

import Modal from '@/app/_components/modal'
import useAddReview from '@/app/_hook/api/useAddReview'
import StarRatingFormatter from './StarRatingFormatter'

import { validateForm } from '../_utils/validation'

interface PropsType {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface ReviewFormState {
  rating: number
  content: string
  multipartReviewImages: File[]
}

export default function ReviewModal(props: PropsType) {
  const { setShowReviewModal } = props

  const InputRef = useRef<HTMLInputElement>(null)

  const [review, setReview] = useState<ReviewFormState>({
    rating: 0,
    content: '',
    multipartReviewImages: [],
  })

  const { mutateAsync: addReview } = useAddReview()

  /** 별점, 본문, 이미지 업로드 관련 */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement
    const { name, value, files, type } = target

    if (type === 'file' && files) {
      const filesList = Array.from(files) as File[]

      setReview((prevState) => ({
        ...prevState,
        multipartReviewImages: filesList,
      }))
    } else {
      setReview((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  /** 리뷰 등록 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm(review)) {
      return
    }

    const formData = new FormData()

    review.multipartReviewImages.forEach((file) => {
      formData.append('multipartReviewImages', file)
    })
    formData.append('rating', review.rating.toString())
    formData.append('content', review.content)

    const status = await addReview({ itemId: 160, formData })

    if (status === 200) {
      setShowReviewModal(false)
    }
  }

  return (
    <Modal>
      <form className="p-[13px_0_45px]" onSubmit={handleSubmit}>
        <div className="flex justify-between border-b px-[23px] py-[18px]">
          <div className="w-[36px]" />
          <div className="w-full text-center text-[24px]">리뷰작성</div>
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
          <div className="mb-[40px] flex gap-[20px] rounded-[8px] bg-[#F4F4F4] p-[20px]">
            <div className="h-[80px] w-[80px] rounded-[3.736px] bg-[#D2D2D2]" />
            <div className="flex flex-col justify-center gap-[18px]">
              <div className="text-[18px]">
                영결무람 문라이트 야광 반사 농구공 레인보우
              </div>
              <div className="text-[20px] font-semibold">29,200원</div>
            </div>
          </div>
          <div className="mb-[50px] flex flex-col items-center gap-[20px]">
            <div>상품은 만족하셨나요?</div>
            <div className="flex gap-[8px]">
              {/** 리뷰 별점 입력 */}
              <StarRatingFormatter
                rating={review.rating}
                setRate={(rating) => setReview({ ...review, rating })}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <div>리뷰글을 작성해주세요.</div>
            <textarea
              name="content"
              placeholder="최소 10자 이상 작성해주세요."
              className="h-[152px] w-[508px] max-w-full resize-none border border-[#DADADA] bg-[#F4F4F4] p-[14px_12px] text-[14px] outline-none"
              onChange={handleChange}
              minLength={10}
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
