import { itemTags } from '.'

export async function fetchItemDetail(itemId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { tags: [itemTags.itemDetail] },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  return data
}
