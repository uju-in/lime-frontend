'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import { getCookie } from '@/app/_utils/cookie'

interface VoteItemRequest {
  itemId: number | null
  voteId: number
}

export async function voteItem({
  itemId,
  voteId,
}: VoteItemRequest): Promise<string> {
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

  revalidateTag('voteDetail')

  revalidatePath(`/votes/${voteId}`)

  if (!res.ok) {
    const data = await res.json()

    return data.message
  }

  return 'success'
}
