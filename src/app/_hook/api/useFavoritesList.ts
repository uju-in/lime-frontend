import { useQuery } from '@tanstack/react-query'

import { getCookie } from '@/app/_utils/cookie'

interface RequestInfo {
  type: 'folder' | 'item'
  folderId?: number
}

export async function fetchFavoriteList({ type, folderId }: RequestInfo) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites?favoriteTypeCondition=${type}
        `,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }
  console.log(data)

  return data
}

export const useFavoritesList = (
  type: 'folder' | 'item',
  folderId?: number,
) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['save', type, folderId],
    queryFn: () => fetchFavoriteList({ type, folderId }),
    staleTime: 1000 * 60,
  })

  return { data, isLoading, isError, isSuccess }
}
