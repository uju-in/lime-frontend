'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { ItemInfo, ReviewResponse } from '@/app/_types/review.type'

import { useSearchItemQuery } from '@/app/_hook/api/useSearchItemQuery'

import Review from './Review'
import ReviewModal from './ReviewModal'

export default function ReviewSection({ itemInfo }: ItemInfo) {
  const [showReviewModal, setShowReviewModal] = useState(false)

  const { data, reviewList, fetchNextPage } = useSearchItemQuery(itemInfo.id)

  /** 추가 데이터 요청(리뷰 더보기) */
  const handleLoadMore = () => {
    fetchNextPage()
  }

  return (
    <article className="mt-[64px]">
      <div className="flex h-[42px] justify-between border-b-2 border-b-[#000]">
        <p className="text-[18px] font-[600]">
          리뷰 ({data?.pages[0]?.itemReviewTotalCount})
        </p>
        <div className="flex items-center font-[600] text-[#3F3F3F]">
          <Image
            width={14}
            height={14}
            src="/image/icon/icon-pencil.svg"
            alt="write review"
          />
          <button
            type="button"
            className="flex items-center text-[14px] font-[600]"
            onClick={() => {
              setShowReviewModal((prev) => !prev)
            }}
          >
            리뷰 작성
          </button>
        </div>
      </div>
      {/** 리뷰 정렬 */}
      {data?.pages[0].itemReviewTotalCount !== 0 ? (
        <>
          <div className="mb-[12px] mt-[30px] flex text-[12px] font-[500]">
            <button
              className="flex w-[52px] border-r-[0.5px] border-r-[#D4D4D4]"
              type="button"
            >
              베스트순
            </button>
            <button className="ml-[10px]" type="button">
              최신순
            </button>
          </div>
          {/** 리뷰 */}
          <div>
            {reviewList.map((review: ReviewResponse, index: number) => (
              <Review
                key={review.reviewSummary.reviewId}
                review={review}
                isFirst={index === 0}
              />
            ))}
            {/** 리뷰 더보기 */}
            <div className="flex h-[80px] items-start justify-center">
              <button
                className="flex items-center text-[14px] font-[600] text-[#BDBDBD]"
                type="button"
                onClick={handleLoadMore}
              >
                <p>리뷰 더보기</p>
                <Image
                  className="ml-2"
                  width={14}
                  height={14}
                  src="/image/icon/icon-arrow_bottom_BD.svg"
                  alt="arrow bottom"
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        // 리뷰가 없을 경우
        <div className="mt-[51px] flex justify-center font-[500]">
          이 상품의 첫 번째 리뷰를 작성해 보세요
        </div>
      )}

      {/** 리뷰 작성 모달 */}
      {showReviewModal && (
        <ReviewModal
          itemData={itemInfo}
          setShowReviewModal={setShowReviewModal}
        />
      )}
    </article>
  )
}
