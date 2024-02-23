'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import { getCookie } from '@/app/_utils/cookie'
import { voteTags } from '.'

export async function reVote({ voteId }: { voteId: number }): Promise<void> {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}/cancel
        `,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  revalidateTag(voteTags.voteDetail)

  revalidatePath(`/votes/${voteId}`)

  if (!res.ok) {
    const data = await res.json()

    throw Error(data.message)
  }
}
