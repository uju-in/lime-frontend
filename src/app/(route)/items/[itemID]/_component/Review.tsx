'use client'

import React from 'react'
import Image from 'next/image'

import { ReviewResponse } from '@/app/_types/review.type'

import { dateFormatter } from '../_utils/dateFormatter'

export default function Review({
  review,
  isFirst,
}: {
  review: ReviewResponse
  isFirst: boolean
}) {
  console.log(review)
  return (
    <div
      className={`flex h-[190px] items-center justify-between ${
        isFirst ? 'border-0' : 'border-t border-[#D2D2D2]'
      } p-[20px]`}
    >
      <div className="mr-[20px] flex h-[140px] w-[535px] flex-col">
        {/** 프로필 사진, 닉네임, 날짜, 평점, 레벨 */}
        <div className="flex">
          <Image
            width={40}
            height={40}
            src={review.memberInfo.profileImage}
            alt="member profile"
            className="mr-[8px] h-[40px] w-[40px] rounded-full"
          />
          <div>
            <div className=" flex items-center">
              <p className="mr-[4.52px] text-[12px] font-[700]">
                {review.memberInfo.nickname}
              </p>
              <div className="flex h-[13px] w-[27px] justify-center rounded-[4px] bg-[#000]">
                <p className="text-[8px] font-[700] text-white">
                  Lv. {review.memberInfo.level}
                </p>
              </div>
            </div>
            <div className="mt-[4px] flex">
              <div className="flex">
                <Image
                  className="mr-[2px] cursor-pointer"
                  width={12}
                  height={12}
                  src="/image/icon/icon-filled_star.svg"
                  alt="grade"
                />
                <Image
                  className="mr-[2px] cursor-pointer"
                  width={12}
                  height={12}
                  src="/image/icon/icon-filled_star.svg"
                  alt="grade"
                />
                <Image
                  className="mr-[2px] cursor-pointer"
                  width={12}
                  height={12}
                  src="/image/icon/icon-filled_star.svg"
                  alt="grade"
                />
                <Image
                  className="mr-[2px] cursor-pointer"
                  width={12}
                  height={12}
                  src="/image/icon/icon-filled_star.svg"
                  alt="grade"
                />
                <Image
                  className="mr-[2px] cursor-pointer"
                  width={12}
                  height={12}
                  src="/image/icon/icon-empty_star.svg"
                  alt="grade"
                />
              </div>
              <div className="mx-[10px] h-[12px] border-l-[0.5px] border-[#B3B3B3] " />
              <p className="flex items-center text-[10px] font-[500] text-[#747474]">
                {dateFormatter(review.reviewSummary.createdAt)}
              </p>
            </div>
          </div>
        </div>
        {/** 본문(후기) */}
        <div className="ml-[48px] mt-[14px] text-[12px] font-[400]">
          <p>{review.reviewSummary.content}</p>
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
      </div>
      {/** 리뷰 이미지 */}
      <div className="relative ">
        <div className="h-[80px] w-[80px] bg-[#D2D2D2]" />
        <div className="absolute bottom-0 right-0 z-10 flex h-[22px] w-[22px] items-center justify-center bg-[#000] text-[12px] font-[500] text-[#fff]">
          3
        </div>
      </div>
    </div>
  )
}
