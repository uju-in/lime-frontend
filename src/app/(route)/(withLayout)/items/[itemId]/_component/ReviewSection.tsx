'use client'

import { useState } from 'react'
import { ReviewResponse, SortOption } from '@/app/_types/review.type'
import { useSearchItemQuery } from '@/app/_hook/api/reviews/useReviewListData'
import { cn } from '@/app/_utils/twMerge'
import InfiniteScrollTrigger from '@/app/_components/infiniteScrollTrigger'
import { ItemInfo } from '@/app/_types/item.type'
import Review from './Review'
import ReviewModal from './ReviewModal'
import { ReviewItemSkeleton } from './ReviewSkeletonUI'
import ReviewSortOptions from './ReviewSortOptions'
import ReviewHeader from './ReviewHeader'

interface PropsType {
  itemInfo: ItemInfo
}

export default function ReviewSection(props: PropsType) {
  const { itemInfo } = props

  const [showReviewModal, setShowReviewModal] = useState(false)
  const [sortOption, setSortOption] = useState<SortOption>('NEWEST')

  const { data, reviewList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSearchItemQuery(itemInfo.id, sortOption)

  return (
    <article className={cn('mt-[64px]', 'mo:mt-[28px] mo:px-[16px]')}>
      {/** 리뷰 헤더 (리뷰 개수/작성 버튼) */}
      <ReviewHeader
        setShowReviewModal={setShowReviewModal}
        itemReviewTotalCount={data?.pages[0]?.itemReviewTotalCount ?? 0}
      />
      {/** 리뷰 정렬 */}
      {data?.pages[0].itemReviewTotalCount !== 0 ? (
        <>
          <ReviewSortOptions
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          {/** 리뷰 */}
          <div>
            {reviewList?.map((review: ReviewResponse, index: number) => (
              <Review
                key={review.reviewSummary.reviewId}
                review={review}
                itemInfo={itemInfo}
                isFirst={index === 0}
              />
            ))}
            {/** 리뷰 더보기 */}
            <div
              className={cn('flex items-start justify-center', 'mo:pb-[80px]')}
            >
              <InfiniteScrollTrigger
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
              >
                <ReviewItemSkeleton />
              </InfiniteScrollTrigger>
            </div>
          </div>
        </>
      ) : (
        // 리뷰가 없을 경우
        <div className="flex items-center justify-center py-[132px] font-[500]">
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
