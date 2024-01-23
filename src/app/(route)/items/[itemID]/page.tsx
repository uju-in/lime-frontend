'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import RQProvider from '@/app/_components/RQProvider'
import ReviewModal from './_component/ReviewModal'

export default function DetailPage() {
  const [showReviewModal, setShowReviewModal] = useState(false)

  return (
    <section className="mx-auto mt-[32px] w-[720px]">
      {/** 상단 아이템 정보 */}
      <article className="flex h-[227px] justify-between">
        <div className="h-[227px] w-[227px] rounded-[8px] bg-[#D2D2D2]" />
        <div className="w-[473px]">
          <div className="h-[179px] w-[473px] border-t-[3px] border-[#000]">
            <p className="mt-3 text-[22px] font-[600]">
              영결무람 문라이트 야광 반사 농구공 레인보우
            </p>
            <div className="mt-4 flex">
              <Image
                className="mr-1"
                width={14}
                height={14}
                src="/image/icon/icon-filled_star.svg"
                alt="grade"
              />
              <p className="text-[14px] font-[500] text-[#6F6F6F]">4.5/5</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p className="text-[26px] font-[700]">29,200원</p>
              <div className="flex items-center font-[500] text-[#6F6F6F]">
                <Image
                  className="mr-2"
                  width={13}
                  height={13}
                  src="/image/icon/icon-save.svg"
                  alt="save"
                />
                <p>24</p>
              </div>
            </div>
          </div>
          <div className="flex h-[48px] justify-between">
            <button
              className="w-[164px] rounded-[4px] bg-[#EDEDED] text-[14px] font-[600]"
              type="button"
            >
              아이템 담기
            </button>
            <button
              className="w-[292px] rounded-[4px] bg-black text-[14px] font-[600] text-[#fff]"
              type="button"
            >
              구매하러 가기
            </button>
          </div>
        </div>
      </article>
      {showReviewModal && (
        <RQProvider>
          <ReviewModal setShowReviewModal={setShowReviewModal} />
        </RQProvider>
      )}
    </section>
  )
}
