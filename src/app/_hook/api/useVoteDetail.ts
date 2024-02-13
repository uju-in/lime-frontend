import { VoteDetailType } from '@/app/_types/detailVote.type'

export async function fetchVoteDetail(voteId: number): Promise<VoteDetailType> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { tags: ['voteDetail'] },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  return data
}
