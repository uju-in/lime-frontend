import { ItemResponse } from '@/app/_types/item.type'

export async function fetchItems(hobbyName: string): Promise<ItemResponse> {
  const SIZE = 6

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/search?hobbyName=${hobbyName}&size=${SIZE}`,
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
