import { useMemo } from 'react'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { PagesResponse } from '@/app/_types/vote.type'
import { voteKeys } from '.'

interface VoteQueryParams {
  pageParam: string | null
  hobby: string
  sortOption: string
}

async function fetchVoteData({
  pageParam,
  hobby,
  sortOption,
}: VoteQueryParams) {
  const SIZE = 6

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes?hobby=${hobby}&cursorId=${pageParam}&size=${SIZE}&sort=${sortOption}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

export const useVoteListData = (hobby: string, sortOption: string) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: voteKeys.voteList(hobby, sortOption).queryKey,
      queryFn: ({ pageParam = null }) =>
        fetchVoteData({ pageParam, sortOption, hobby }),
      initialPageParam: null,
      getNextPageParam: (lastPage: PagesResponse) => {
        return lastPage.nextCursorId
      },
      staleTime: 1000 * 60,
    })

  const voteList = useMemo(
    () => (data ? data.pages.flatMap((pageData) => pageData.votes) : []),
    [data],
  )

  return { voteList, fetchNextPage, isFetchingNextPage, hasNextPage }
}
