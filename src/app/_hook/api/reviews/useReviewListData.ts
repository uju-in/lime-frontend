import { useMemo } from 'react'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { PagesResponse, SortOption } from '@/app/_types/review.type'
import { reviewKeys } from '.'

interface ReviewQueryParams {
  pageParam: string | null
  itemId: number
  sortOption: SortOption
  accessToken: string
}

async function fetchReviewData({
  pageParam,
  itemId,
  sortOption,
  accessToken,
}: ReviewQueryParams) {
  /** 기본 3개 - 추가 10개 */
  const REVIEW_DATA_SIZE = !pageParam ? 3 : 10

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews?itemId=${itemId}&size=${REVIEW_DATA_SIZE}&cursorId=${pageParam}&reviewSortCondition=${sortOption}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useSearchItemQuery = (
  itemId: number,
  sortOption: SortOption,
  accessToken: string,
) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: reviewKeys.reviewList(itemId, sortOption),
      queryFn: ({ pageParam = null }) =>
        fetchReviewData({ pageParam, itemId, sortOption, accessToken }),
      initialPageParam: null,
      getNextPageParam: (lastPage: PagesResponse) => {
        return lastPage.nextCursorId
      },
      staleTime: 1000 * 60,
    })

  const reviewList = useMemo(
    () => (data ? data.pages.flatMap((pageData) => pageData.reviews) : []),
    [data],
  )

  return { data, reviewList, fetchNextPage, isFetchingNextPage, hasNextPage }
}
