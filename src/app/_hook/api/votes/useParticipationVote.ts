'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import { getCookie } from '@/app/_utils/cookie'
import { voteTags } from '.'

interface VoteItemRequest {
  itemId: number | null
  voteId: number
}

export async function voteItem({
  itemId,
  voteId,
}: VoteItemRequest): Promise<number> {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}/participation
        `,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ itemId }),
    },
  )

  revalidateTag(voteTags.voteDetail)

  revalidatePath(`/votes/${voteId}`)

  if (!res.ok) {
    const data = await res.json()

    throw Error(data.message)
  }

  return res.status
}
