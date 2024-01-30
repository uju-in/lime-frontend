'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import useOutsideClick from '@/app/_hook/common/useOutsideClick'

import { ReviewResponse } from '@/app/_types/review.type'

import { dateFormatter } from '../_utils/dateFormatter'

import StarRating from './StarRating'

export default function Review({
  review,
  isFirst,
}: {
  review: ReviewResponse
  isFirst: boolean
}) {
  const { memberInfo, reviewSummary } = review

  const dropdownRef = useRef(null)

  const [showReviewDetail, setShowReviewDetail] = useState<number | null>(null)

  // 리뷰 상세 보기
  const handleReviewClick = () => {
    if (showReviewDetail === reviewSummary.reviewId) {
      setShowReviewDetail(null)
    } else {
      setShowReviewDetail(reviewSummary.reviewId)
    }
  }

  /** 외부 클릭 시 상세 리뷰 닫기 */
  useOutsideClick(dropdownRef, () => {
    if (showReviewDetail !== null) {
      setShowReviewDetail(null)
    }
  })

  return (
    <button
      type="button"
      ref={dropdownRef}
      className={`flex w-full items-center justify-between ${
        isFirst ? 'border-0' : 'border-t border-[#D2D2D2]'
      } ${
        showReviewDetail === reviewSummary.reviewId
          ? 'mb-[12px] bg-[#F6F6F6]'
          : 'h-[190px] bg-[#fff]'
      } p-[20px]`}
      onClick={handleReviewClick}
    >
      <div className="mr-[20px] flex w-[535px] flex-col p-[20px]">
        {/** 프로필 사진, 닉네임, 날짜, 평점, 레벨 */}
        <div className="flex">
          <Image
            width={40}
            height={40}
            src={memberInfo.profileImage}
            alt="member profile"
            className="mr-[8px] h-[40px] w-[40px] rounded-full"
          />
          <div>
            <div className=" flex items-center">
              <p className="mr-[4.52px] text-[12px] font-[700]">
                {memberInfo.nickname}
              </p>
              <div className="flex h-[13px] w-[27px] justify-center rounded-[4px] bg-[#000]">
                <p className="text-[8px] font-[700] text-white">
                  Lv. {memberInfo.level}
                </p>
              </div>
            </div>
            <div className="mt-[4px] flex">
              {/** 리뷰 별점 */}
              <StarRating rate={reviewSummary.rate} />
              <div className="mx-[10px] h-[12px] border-l-[0.5px] border-[#B3B3B3] " />
              <p className="flex items-center text-[10px] font-[500] text-[#747474]">
                {dateFormatter(reviewSummary.createdAt)}
              </p>
            </div>
          </div>
        </div>
        {/** 본문(후기) */}
        <div className="ml-[48px] mt-[14px] text-[12px] font-[400]">
          <p className="text-start">{reviewSummary.content}</p>
        </div>
        {/** 추천 개수 */}
        <div className="ml-[48px] mt-[8px] flex">
          <Image
            className="mr-[2px] cursor-pointer"
            width={12}
            height={14}
            src="/image/icon/icon-like.svg"
            alt="recommend"
          />
          <p className="pt-[1.5px] text-[12px] font-[600]">7</p>
        </div>
        {/** 리뷰 상세 이미지 */}
        {showReviewDetail === reviewSummary.reviewId && (
          <div className="mt-[20px]">
            {reviewSummary.imageUrls.map((img: string) => (
              <Image
                key={img}
                width={224}
                height={320}
                src={img}
                alt="detail review image"
                className="mb-[12px] ml-[48px]"
              />
            ))}
          </div>
        )}
      </div>
      {/** 리뷰 썸네일 이미지 */}
      {showReviewDetail !== reviewSummary.reviewId && (
        <div className="relative">
          <Image
            width={80}
            height={80}
            src={reviewSummary.imageUrls[0]}
            alt="review image"
          />
          <p className="absolute bottom-0 right-0 z-10 flex h-[22px] w-[22px] items-center justify-center bg-[#000] text-[12px] font-[500] text-[#fff]">
            {reviewSummary.imageUrls.length}
          </p>
        </div>
      )}
    </button>
  )
}
