'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import RQProvider from '@/app/_components/RQProvider'
import Review from './_component/Review'
import ReviewModal from './_component/ReviewModal'

export default function DetailPage() {
  const [showReviewModal, setShowReviewModal] = useState(false)

  return (
    <section className="w-full flex-col bg-[#f7f7f7]">
      <article className="flex  w-full justify-center bg-white">
        <div className="flex h-[300px] w-[800px] justify-between p-6 ">
          <div className="h-[240px] w-[240px] rounded-[8px] bg-[#D2D2D2]" />
          <div>
            <div className="h-[195px] w-[470px] border-t-[3px] border-black">
              <p className="mt-4 text-[22px] font-[600]">
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
            <div className="flex h-[45px] justify-between">
              <button
                className="w-[160px] rounded-[4px] bg-[#EDEDED] text-[14px] font-[600]"
                type="button"
              >
                아이템 담기
              </button>
              <button
                className="w-[300px] rounded-[4px] bg-black text-[14px] font-[600] text-white"
                type="button"
              >
                구매하러 가기
              </button>
            </div>
          </div>
        </div>
      </article>
      <article className="flex h-full w-full justify-center">
        <div className="w-[800px] bg-white p-6">
          <div className="flex justify-between">
            <p className="text-[20px] font-[600]">리뷰 (12)</p>
            <button
              type="button"
              className="flex items-center font-[600] text-[#3F3F3F]"
              onClick={() => {
                setShowReviewModal((prev) => !prev)
              }}
            >
              <Image
                className="mr-1"
                width={14}
                height={14}
                src="/image/icon/icon-pencil.svg"
                alt="write"
              />
              <p className="flex items-center">리뷰작성</p>
            </button>
          </div>
          <div className="mt-10 flex flex h-[100px] justify-between">
            <div className="flex w-[26px] items-center justify-center rounded-[1px] border border-[#CCCCCC]">
              <Image
                className="cursor-pointer"
                width={10}
                height={10}
                src="/image/icon/icon-arrow_left.svg"
                alt="prev"
              />
            </div>
            <div className="flex w-[680px]">
              <div className="mr-2 h-[100px] w-[100px] bg-[#D2D2D2]" />
              <div className="mr-2 h-[100px] w-[100px] bg-[#D2D2D2]" />
              <div className="mr-2 h-[100px] w-[100px] bg-[#D2D2D2]" />
              <div className="mr-2 h-[100px] w-[100px] bg-[#D2D2D2]" />
            </div>
            <div className="flex w-[26px] items-center justify-center rounded-[1px] border border-[#CCCCCC]">
              <Image
                className="cursor-pointer"
                width={10}
                height={10}
                src="/image/icon/icon-arrow_right.svg"
                alt="next"
              />
            </div>
          </div>
          <div className="bg-white">
            <Review />
            <Review />
            <Review />
            <button className="" type="button">
              더보기
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
