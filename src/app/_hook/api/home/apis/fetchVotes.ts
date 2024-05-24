import { PagesResponse } from '@/app/_types/vote.type'

export async function fetchVotes(hobby: string): Promise<PagesResponse> {
  const SIZE = 4
  const pageParam = null

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes?hobby=${hobby}&cursorId=${pageParam}&size=${SIZE}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}
