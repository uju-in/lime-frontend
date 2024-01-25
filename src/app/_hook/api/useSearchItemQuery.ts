import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query'

import { PagesResponse } from '@/app/_types/review.type'

async function fetchReviewData(pageParam: string | null, itemId: number) {
  /** 초기 3개 추가 10개 */
  const REVIEW_DATA_SIZE = !pageParam ? 3 : 10

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}/reviews?size=${REVIEW_DATA_SIZE}&cursorId=${pageParam}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useSearchItemQuery = (itemId: number) => {
  return useInfiniteQuery<
    PagesResponse,
    Error,
    InfiniteData<PagesResponse>,
    string[],
    string | null
  >({
    queryKey: ['itemDetail'],
    queryFn: ({ pageParam = null }) => fetchReviewData(pageParam, itemId),
    initialPageParam: null,
    getNextPageParam: (lastPage: PagesResponse) => {
      return lastPage.nextCursorId
    },
    retry: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
