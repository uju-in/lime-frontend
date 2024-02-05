'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import useOutsideClick from '@/app/_hook/common/useOutsideClick'

import { ReviewResponse } from '@/app/_types/review.type'

import { dateFormatter } from '../_utils/dateFormatter'

import StarRating from './StarRating'
import LikeButton from './LikeButton'
import ReviewModal from './ReviewModal'

interface PropsType {
  review: ReviewResponse
  isFirst: boolean
  itemInfo: {
    id: number
    name: string
    price: number
    image: string
  }
}

export default function Review(props: PropsType) {
  const { review, isFirst, itemInfo } = props
  const { memberInfo, reviewSummary, reviewLoginMemberStatus } = review
  const { id } = itemInfo

  const dropdownRef = useRef(null)

  const [showReviewDetail, setShowReviewDetail] = useState<number | null>(null)
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false)
  const [showEditMenu, setShowEditMenu] = useState<boolean>(false)

  /** 리뷰 상세 보기 */
  const handleReviewClick = () => {
    if (showReviewDetail === reviewSummary.reviewId) {
      setShowReviewDetail(null)
    } else {
      setShowReviewDetail(reviewSummary.reviewId)
    }
  }

  /** 리뷰 관리 모달 on/off  */
  const handleManageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    setShowEditMenu(!showEditMenu)
  }

  useOutsideClick(dropdownRef, () => {
    if (showReviewDetail !== null) {
      setShowReviewDetail(null)
      setShowEditMenu(false)
    }
  })

  return (
    <div
      ref={dropdownRef}
      className={`flex w-full justify-between ${
        isFirst ? 'border-0' : 'border-t border-[#D2D2D2]'
      } ${
        showReviewDetail === reviewSummary.reviewId
          ? 'mb-[12px] bg-[#F6F6F6]'
          : 'h-[190px] items-center bg-[#fff]'
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
        {/** 리뷰 좋아요 */}
        <button
          type="button"
          className={`ml-[38px] mt-[8px] flex h-[30px] w-[50px] items-center justify-center rounded-[100px] ${
            reviewLoginMemberStatus.isLiked && 'bg-[#000] text-[#fff]'
          } ${showReviewDetail && 'border border-[#D1D1D1]'}`}
        >
          <LikeButton
            reviewId={reviewSummary.reviewId}
            itemId={id}
            isLiked={reviewLoginMemberStatus.isLiked}
          />
          <p className="ml-[2px] text-[14px] font-[600] text-[#6F6F6F]">
            {reviewSummary.likeCount}
          </p>
        </button>
      </div>
      {/** 리뷰 관리 (수정/삭제) */}
      {!reviewLoginMemberStatus.isReviewed && (
        <div className="relative">
          <button type="button" onClick={handleManageClick}>
            <Image
              width={18}
              height={18}
              src="/image/icon/icon-kebab_menu.svg"
              alt="kebab menu"
            />
          </button>
          {showEditMenu && (
            <div className="absolute right-0 mt-2 flex h-[54px] w-[94px] flex-col bg-[#fff] text-[12px] font-[600] text-[#868585]">
              <button
                type="button"
                className="flex flex-1 items-center justify-center border-b-[0.5px] border-[#EDEDED]"
                onClick={() => {
                  setShowReviewModal((prev) => !prev)
                }}
              >
                <p className="mr-[5px]">수정하기</p>
                <Image
                  width={16}
                  height={16}
                  src="/image/icon/icon-pencil.svg"
                  alt="edit review"
                />
              </button>
              <div className="flex flex-1 items-center justify-center">
                <p className="mr-[5px]">삭제하기</p>
                <Image
                  width={12}
                  height={12}
                  src="/image/icon/icon-trash_can.svg"
                  alt="delete review"
                />
              </div>
            </div>
          )}
        </div>
      )}
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
      {showReviewModal && (
        <ReviewModal
          action="edit"
          itemData={itemInfo}
          setShowReviewModal={setShowReviewModal}
          review={review.reviewSummary}
        />
      )}
    </div>
  )
}
