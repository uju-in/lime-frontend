'use client'

import Modal from '@/app/_components/modal'
import Image from 'next/image'
import React from 'react'

interface PropsType {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ReviewModal(props: PropsType) {
  const { setShowReviewModal } = props

  return (
    <Modal>
      <div className="p-[13px_0_45px]">
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
              <Image
                alt="star"
                width={56}
                height={56}
                src="/image/icon/icon-empty_star.svg"
              />
              <Image
                alt="star"
                width={56}
                height={56}
                src="/image/icon/icon-empty_star.svg"
              />
              <Image
                alt="star"
                width={56}
                height={56}
                src="/image/icon/icon-empty_star.svg"
              />
              <Image
                alt="star"
                width={56}
                height={56}
                src="/image/icon/icon-empty_star.svg"
              />
              <Image
                alt="star"
                width={56}
                height={56}
                src="/image/icon/icon-empty_star.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <div>리뷰글을 작성해주세요.</div>
            <textarea
              placeholder="최소 10자 이상 작성해주세요."
              className="h-[152px] w-[508px] resize-none border border-[#DADADA] bg-[#F4F4F4] p-[14px_12px] text-[14px] outline-none"
            />
            <button
              type="button"
              className="w-full border border-dashed border-[#DADADA] py-[11px]"
            >
              사진 첨부하기
            </button>
          </div>
          <div className="mt-[50px] flex w-full gap-[20px] text-[16px] font-semibold">
            <button
              type="button"
              className="flex-1 rounded-[4px] border border-[#DADADA] py-[12px]"
            >
              취소
            </button>
            <button
              type="button"
              className="flex-1 rounded-[4px] bg-black py-[12px] text-white"
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
