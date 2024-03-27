'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { ReviewResponse } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'
import { dateFormatter } from '../../../../../_utils/dateFormatter'

import StarRating from './StarRating'
import ReviewModal from './ReviewModal'
import EditButtons from './EditButtons'
import ReviewLikeButton from './ReviewLikeButton'
import ReviewImage from './ReviewImage'

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

  useOutsideClick(dropdownRef, () => {
    if (showReviewDetail !== null) {
      setShowReviewDetail(null)
      setShowEditMenu(false)
    }
  })

  return (
    <div
      ref={dropdownRef}
      className={cn(
        'flex w-full justify-between p-[20px] hover:bg-[#f6f6f6]',
        'mo:mb-[12px] mo:px-0 mo:hover:bg-white',
        {
          'border-0': isFirst,
          'border-t border-[#D2D2D2]': !isFirst,
          'bg-[#F6F6F6] mo:items-center':
            showReviewDetail === reviewSummary.reviewId,
          'items-center bg-[#fff]': showReviewDetail !== reviewSummary.reviewId,
        },
      )}
      onClick={handleReviewClick}
    >
      <div
        className={cn('mr-[20px] flex w-[535px] flex-col p-[20px]', 'mo:p-0')}
      >
        {/** 프로필 사진, 닉네임, 날짜, 평점, 레벨 */}
        <div className="flex justify-between">
          <div className="flex">
            <Image
              width={40}
              height={40}
              src={memberInfo.profileImage}
              alt="member profile"
              className="mr-[8px] h-[40px] w-[40px] rounded-full"
            />
            <div>
              <div className="flex items-center">
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
          <div className={cn('hidden', 'mo:block')}>
            <ReviewLikeButton
              reviewId={reviewSummary.reviewId}
              isLiked={reviewLoginMemberStatus.isLiked}
              likeCount={reviewSummary.likeCount}
              showReviewDetail={showReviewDetail}
            />
          </div>
        </div>
        {/** mobile ThumbnailImage */}
        <ReviewImage imageUrls={reviewSummary.imageUrls} mode="mobile" />
        {/** 본문(후기) */}
        <div
          className={cn(
            'ml-[48px] mt-[14px] text-[12px] font-[400]',
            'mo:ml-0',
          )}
        >
          <p className="text-start">{reviewSummary.content}</p>
        </div>
        {reviewLoginMemberStatus.isReviewed && (
          <div className={cn('hidden', 'mo:block')}>
            <EditButtons
              setShowReviewModal={setShowReviewModal}
              reviewId={reviewSummary.reviewId}
            />
          </div>
        )}
        {/** 리뷰 상세 이미지 */}
        {showReviewDetail === reviewSummary.reviewId && (
          <div className={cn('mt-[20px]', 'mo:hidden')}>
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
        <ReviewLikeButton
          reviewId={reviewSummary.reviewId}
          isLiked={reviewLoginMemberStatus.isLiked}
          likeCount={reviewSummary.likeCount}
          showReviewDetail={showReviewDetail}
          innerClassNames="mo:hidden"
        />
      </div>
      {/** 리뷰 관리 (수정/삭제) */}
      {reviewLoginMemberStatus.isReviewed && showReviewDetail && (
        <div className={cn('relative', 'mo:hidden')}>
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
      {/** 리뷰 썸네일 이미지 (PC) */}
      {showReviewDetail !== reviewSummary.reviewId && (
        <ReviewImage imageUrls={reviewSummary.imageUrls} />
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
