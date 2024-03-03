import { RankingInfo } from '@/app/_types/vote.type'
import { useSuspenseQuery } from '@tanstack/react-query'
import { voteKeys } from '.'

async function fetchVoteRanking(hobby: string): Promise<RankingInfo> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/ranking?hobby=${hobby}`,
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
    throw data.message
  }

  return data
}

export const useVoteRanking = (hobby: string) => {
  const { data: rankingList, isError } = useSuspenseQuery({
    queryKey: voteKeys.voteRanking(hobby).queryKey,
    queryFn: () => fetchVoteRanking(hobby),
    staleTime: 1000 * 60,
  })

  return { rankingList, isError }
}
