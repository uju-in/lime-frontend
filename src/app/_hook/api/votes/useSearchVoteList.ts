import { useMemo } from 'react'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { PagesResponse } from '@/app/_types/vote.type'
import { voteKeys } from '.'

interface VoteQueryParams {
  pageParam: string | null
  keyword: string
}

async function fetchSearchVotes({ pageParam, keyword }: VoteQueryParams) {
  const SIZE = 6

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/search?keyword=${keyword}&cursorId=${pageParam}&size=${SIZE}`,
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

export const useSearchVoteList = (keyword: string) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: voteKeys.searchList(keyword).queryKey,
      queryFn: ({ pageParam = null }) =>
        fetchSearchVotes({ pageParam, keyword }),
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
