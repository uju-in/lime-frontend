import { getCookie } from '@/app/_utils/cookie'

export async function fetchVoteRanking(hobby: string) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/ranking?hobby=${hobby}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${accessToken}`,
      },
      next: { tags: ['voteRanking'] },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  return data
}
