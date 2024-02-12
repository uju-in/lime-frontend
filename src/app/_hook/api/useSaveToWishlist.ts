'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import { getCookie } from '@/app/_utils/cookie'

export async function postSaveToWishlist(itemIds: number[]) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/myitems
        `,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ itemIds }),
    },
  )

  revalidateTag('itemDetail')

  revalidatePath(`/items/${itemIds[0]}`)

  if (!res.ok) {
    const data = await res.json()

    throw Error(data.message)
  }
}
