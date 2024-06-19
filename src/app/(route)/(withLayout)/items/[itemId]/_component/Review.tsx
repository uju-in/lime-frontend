'use client'

import UserProfile from '@/app/(route)/(withLayout)/items/[itemId]/_component/UserProfile'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { ReviewResponse, SortOption } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRef, useState } from 'react'
import EditButtons from './EditButtons'
import ReviewImage from './ReviewImage'
import ReviewLikeButton from './ReviewLikeButton'

interface PropsType {
  review: ReviewResponse
  isFirst: boolean
  itemId: number
  sortOption: SortOption
}

export default function Review(props: PropsType) {
  const { review, isFirst, itemId, sortOption } = props
  const { memberInfo, reviewSummary, reviewLoginMemberStatus } = review

  const dropdownRef = useRef(null)

  const [showReviewDetail, setShowReviewDetail] = useState<number | null>(null)
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
    <article
      ref={dropdownRef}
      className={cn(
        'flex w-full justify-between p-[20px] hover:bg-[#f6f6f6]',
        'mo:mb-[12px] mo:px-0 mo:hover:bg-white',
        {
          'border-0': isFirst,
          'border-t border-[#D2D2D2]': !isFirst,
          'bg-[#F6F6F6] mo:items-center mo:bg-white':
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
          <UserProfile memberInfo={memberInfo} reviewSummary={reviewSummary} />
          <div className={cn('hidden', 'mo:block')}>
            <ReviewLikeButton
              reviewId={reviewSummary.reviewId}
              isLiked={reviewLoginMemberStatus.isLiked}
              likeCount={reviewSummary.likeCount}
              sortOption={sortOption}
              itemId={itemId}
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
          <span className="text-start">{reviewSummary.content}</span>
        </div>
        {reviewLoginMemberStatus.isReviewed && (
          <div className={cn('hidden', 'mo:block')}>
            <EditButtons reviewSummary={review.reviewSummary} />
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
          sortOption={sortOption}
          itemId={itemId}
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
          {showEditMenu && <EditButtons reviewSummary={review.reviewSummary} />}
        </div>
      )}
      {/** 리뷰 썸네일 이미지 (PC) */}
      {showReviewDetail !== reviewSummary.reviewId && (
        <ReviewImage imageUrls={reviewSummary.imageUrls} />
      )}
    </article>
  )
}
