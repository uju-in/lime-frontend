import { useMemo } from 'react'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

import { PagesResponse, SortOption } from '@/app/_types/review.type'

import { getCookie } from '@/app/_utils/cookie'

interface ReviewQueryParams {
  pageParam: string | null
  itemId: number
  sortOption: SortOption
}

async function fetchReviewData({
  pageParam,
  itemId,
  sortOption,
}: ReviewQueryParams) {
  const accessToken = await getCookie('accessToken')

  /** 기본 3개 - 추가 10개 */
  const REVIEW_DATA_SIZE = !pageParam ? 3 : 10

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}/reviews?size=${REVIEW_DATA_SIZE}&cursorId=${pageParam}&reviewSortCondition=${sortOption}`,
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

export const useSearchItemQuery = (itemId: number, sortOption: SortOption) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery<
      PagesResponse,
      Error,
      InfiniteData<PagesResponse>,
      [string, number, SortOption],
      string | null
    >({
      queryKey: ['review', itemId, sortOption],
      queryFn: ({ pageParam = null }) =>
        fetchReviewData({ pageParam, itemId, sortOption }),
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
