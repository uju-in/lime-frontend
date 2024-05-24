import { useSuspenseQuery } from '@tanstack/react-query'
import { itemKeys } from '..'

async function fetchItemDetail(itemId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useItemDetail = (itemId: number) => {
  const { data: itemData } = useSuspenseQuery({
    queryKey: itemKeys.itemDetail(itemId).queryKey,
    queryFn: () => fetchItemDetail(itemId),
    staleTime: 1000 * 60,
  })

  return { itemData }
}
