'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import { getCookie } from '@/app/_utils/cookie'

export async function deleteVote(voteId: number): Promise<number> {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  revalidateTag('voteDetail')

  revalidatePath(`/votes/${voteId}`)

  if (!res.ok) {
    const data = await res.json()

    throw Error(data.message)
  }

  return res.status
}
