'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import useOutsideClick from '@/app/_hook/common/useOutsideClick'

import { ReviewResponse } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'

import useReviewLikeAction from '@/app/_hook/api/reviews/useReviewLikeAction'
import { dateFormatter } from '../../../../../_utils/dateFormatter'

import StarRating from './StarRating'
import ReviewModal from './ReviewModal'
import EditButtons from './EditButtons'

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

  const dropdownRef = useRef(null)

  const { mutateAsync: likeAction } = useReviewLikeAction()

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

  /** 리뷰 관리 메뉴 on/off  */
  const handleManageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    setShowEditMenu(!showEditMenu)
  }

  /** 리뷰 좋아요 */
  const handleLikeClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()

    await likeAction({
      reviewId: reviewSummary.reviewId,
      isLiked: reviewLoginMemberStatus.isLiked,
    })
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
      className={cn('flex w-full justify-between p-[20px] hover:bg-[#f6f6f6]', {
        'border-0': isFirst,
        'border-t border-[#D2D2D2]': !isFirst,
        'mb-[12px] bg-[#F6F6F6]': showReviewDetail === reviewSummary.reviewId,
        'h-[190px] items-center bg-[#fff]':
          showReviewDetail !== reviewSummary.reviewId,
      })}
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
          className={cn(
            'ml-[38px] mt-[8px] flex h-[30px] w-[50px] items-center justify-center rounded-[100px]',
            {
              'bg-[#000] text-[#fff]': reviewLoginMemberStatus.isLiked,
              'text-[#6F6F6F]': !reviewLoginMemberStatus.isLiked,
              'border border-[#D1D1D1]': showReviewDetail,
            },
          )}
          onClick={handleLikeClick}
        >
          <Image
            src={
              reviewLoginMemberStatus.isLiked
                ? '/image/icon/icon-like_border_white.svg'
                : '/image/icon/icon-like.svg'
            }
            alt="recommend"
            width={14}
            height={14}
            className="cursor-pointer"
          />
          <p className="ml-[4px] text-[14px] font-[600]">
            {reviewSummary.likeCount}
          </p>
        </button>
      </div>
      {/** 리뷰 관리 (수정/삭제) */}
      {reviewLoginMemberStatus.isReviewed && showReviewDetail && (
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
            <EditButtons
              setShowReviewModal={setShowReviewModal}
              reviewId={reviewSummary.reviewId}
            />
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
