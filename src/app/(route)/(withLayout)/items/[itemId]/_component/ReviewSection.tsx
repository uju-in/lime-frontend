'use client'

import InfiniteScrollTrigger from '@/app/_components/infiniteScrollTrigger'
import { useSearchItemQuery } from '@/app/_hook/api/reviews/queries/useReviewListData'
import { ReviewResponse, SortOption } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'
import { useState } from 'react'
import Review from './Review'
import ReviewHeader from './ReviewHeader'
import { ReviewItemSkeleton } from './ReviewSkeletonUI'
import ReviewSortOptions from './ReviewSortOptions'

interface PropsType {
  itemId: number
}

export default function ReviewSection({ itemId }: PropsType) {
  const [sortOption, setSortOption] = useState<SortOption>('NEWEST')

  const { data, reviewList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSearchItemQuery(itemId, sortOption)

  const TOTAL_REVIEW_COUNT = data?.pages[0].itemReviewTotalCount

  return (
    <section className={cn('mt-[64px]', 'mo:mt-[28px] mo:px-[16px]')}>
      {/** 리뷰 헤더 (리뷰 개수/작성 버튼) */}
      <ReviewHeader totalReviewCount={TOTAL_REVIEW_COUNT} />
      {TOTAL_REVIEW_COUNT !== 0 ? (
        <>
          {/** 리뷰 정렬 */}
          <ReviewSortOptions
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          {/** 리뷰 리스트 */}
          <article>
            {reviewList.map((review: ReviewResponse, index: number) => (
              <Review
                key={review.reviewSummary.reviewId}
                review={review}
                itemId={itemId}
                sortOption={sortOption}
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
          </article>
        </>
      ) : (
        // 리뷰가 없을 경우
        <div className="flex items-center justify-center py-[132px] font-[500]">
          이 상품의 첫 번째 리뷰를 작성해 보세요
        </div>
      )}
    </section>
  )
}
