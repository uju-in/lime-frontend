import { useQuery } from '@tanstack/react-query'
import { itemKeys } from '.'

async function getSearchItemList(keyword: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/item-names?keyword=${keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const data = await response.json()

  return data
}

export default function useSearchItem(keyword: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: itemKeys.searchList(keyword).queryKey,
    queryFn: () => getSearchItemList(keyword),
    staleTime: 1000 * 60,
  })

  return {
    data,
    isLoading,
    isError,
  }
}
