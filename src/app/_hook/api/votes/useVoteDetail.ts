import { VoteDetailType } from '@/app/_types/detailVote.type'
import { getCookie } from '@/app/_utils/cookie'
import { voteTags } from '.'

export async function fetchVoteDetail(voteId: number): Promise<VoteDetailType> {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      next: { tags: [voteTags.voteDetail] },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  return data
}
