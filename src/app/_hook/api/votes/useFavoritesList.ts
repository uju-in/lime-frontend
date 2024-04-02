import { useQuery } from '@tanstack/react-query'
import { useCookies } from 'next-client-cookies'
import { voteKeys } from '.'

interface RequestInfo {
  type: 'folder' | 'item'
  folderId?: number | null
  accessToken?: string
}

export async function fetchFavoriteList({
  type,
  folderId,
  accessToken,
}: RequestInfo) {
  let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites?favoriteTypeCondition=${type}`

  if (type === 'item' && folderId) {
    url += `&folderId=${folderId}`
  }

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useFavoritesList = (
  type: 'folder' | 'item',
  folderId?: number | null,
) => {
  const cookies = useCookies()
  const accessToken = cookies.get('accessToken') ?? ''

  const {
    data: itemList,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: voteKeys.favorites(folderId as number).queryKey,
    queryFn: () => fetchFavoriteList({ type, folderId, accessToken }),
    staleTime: 1000 * 60,
  })

  return { itemList, isError, isSuccess }
}
