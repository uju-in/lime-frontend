'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { ItemInfo, ReviewResponse, SortOption } from '@/app/_types/review.type'

import { useSearchItemQuery } from '@/app/_hook/api/useSearchItemQuery'
import { cn } from '@/app/_utils/twMerge'

import Review from './Review'
import ReviewModal from './ReviewModal'
import { ReviewItemSkeleton } from './ReviewSkeletonUI'

import { sortOptions } from '../_constants'

export default function ReviewSection({ itemInfo }: ItemInfo) {
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [sortOption, setSortOption] = useState<SortOption>('NEWEST')

  const { data, reviewList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSearchItemQuery(itemInfo.id, sortOption)

  /** 추가 데이터 요청(리뷰 더보기) */
  const handleLoadMore = () => {
    fetchNextPage()
  }

  return (
    <article className="mt-[64px]">
      <div className="flex h-[42px] justify-between border-b-2 border-b-[#000]">
        <strong className="text-[18px] font-[600]">
          리뷰 ({data?.pages[0]?.itemReviewTotalCount})
        </strong>
        <span className="flex items-center font-[600] text-[#3F3F3F]">
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
        </span>
      </div>
      {/** 리뷰 정렬 */}
      {data?.pages[0].itemReviewTotalCount !== 0 ? (
        <>
          <div className="mb-[12px] mt-[30px] flex gap-[10px] text-[12px] font-[500]">
            {sortOptions.map((option, index) => (
              <React.Fragment key={option.value}>
                {index > 0 && (
                  <div className="h-[10px] w-[0.5px] bg-[#D4D4D4]" />
                )}
                <button
                  type="button"
                  className={cn({
                    'text-[#000]': sortOption === option.value,
                    'text-[#100d0d]': sortOption !== option.value,
                  })}
                  onClick={() => setSortOption(option.value)}
                >
                  {option.label}
                </button>
              </React.Fragment>
            ))}
          </div>
          {/** 리뷰 */}
          <div>
            {reviewList.map((review: ReviewResponse, index: number) => (
              <Review
                key={review.reviewSummary.reviewId}
                review={review}
                itemInfo={itemInfo}
                isFirst={index === 0}
              />
            ))}
            {/** 리뷰 더보기 */}
            <div className="flex h-[80px] items-start justify-center">
              {isFetchingNextPage ? (
                <ReviewItemSkeleton />
              ) : (
                hasNextPage && (
                  <button
                    className="flex items-center text-[14px] font-[600] text-[#BCBCBC]"
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
                )
              )}
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
          action="create"
          itemData={itemInfo}
          setShowReviewModal={setShowReviewModal}
        />
      )}
    </article>
  )
}
