import { PagesResponse } from '@/app/_types/vote.type'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { voteKeys } from '..'

interface VoteQueryParams {
  pageParam: string | null
  hobby: string
  sortOption: string
}

const VOTE_FETCH_SIZE = 6

async function fetchVoteData({
  pageParam,
  hobby,
  sortOption,
}: VoteQueryParams) {
  let URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes?hobby=${hobby}&size=${VOTE_FETCH_SIZE}&sort=${sortOption}`

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

export const useVoteListData = (hobby: string, sortOption: string) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: voteKeys.voteList(hobby, sortOption).queryKey,
      queryFn: ({ pageParam = null }) =>
        fetchVoteData({ pageParam, sortOption, hobby }),
      initialPageParam: null,
      getNextPageParam: (lastPage: PagesResponse) => {
        if (lastPage.totalCount < VOTE_FETCH_SIZE) {
          return null
        }

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
