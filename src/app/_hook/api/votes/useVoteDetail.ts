import { VoteDetailType } from '@/app/_types/detailVote.type'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { voteKeys } from '.'

async function fetchVoteDetail(voteId: number): Promise<VoteDetailType> {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}`,
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
    throw data.message
  }

  return data
}

export const useVoteDetail = (voteId: number) => {
  const {
    data: voteData,
    isError,
    isSuccess,
  } = useSuspenseQuery<VoteDetailType, Error, VoteDetailType>({
    queryKey: voteKeys.detail(voteId).queryKey,
    queryFn: () => fetchVoteDetail(voteId),
    staleTime: 1000 * 60,
  })

  return { voteData, isError, isSuccess }
}
