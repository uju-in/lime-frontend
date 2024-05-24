import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { mypageKeys } from '..'

interface MyContentQueryParams {
  pageParam: string | null
  nickname: string
  hobby: string
}

const CONTENT_FETCH_SIZE = 6

async function fetchUserContent({
  pageParam,
  nickname,
  hobby,
}: MyContentQueryParams) {
  let URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${nickname}/my?status=posted&size=${CONTENT_FETCH_SIZE}&hobby=${hobby}`

  if (pageParam) {
    URL += `&cursorId=${pageParam}`
  }

  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useUserContentListData = (nickname: string, hobby: string) => {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: mypageKeys.userContentList(nickname, hobby).queryKey,
    queryFn: ({ pageParam = null }) =>
      fetchUserContent({ pageParam, nickname, hobby }),
    initialPageParam: null,
    getNextPageParam: (lastPage: any) => {
      if (lastPage.totalCount < CONTENT_FETCH_SIZE) {
        return null
      }

      return lastPage.nextCursorId
    },
    staleTime: 1000 * 60,
  })

  const contentList = useMemo(
    () => (data ? data.pages.flatMap((pageData) => pageData.votes) : []),
    [data],
  )

  return { contentList, fetchNextPage, isFetchingNextPage }
}
