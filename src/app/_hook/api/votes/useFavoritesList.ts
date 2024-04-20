import { useQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { voteKeys } from '.'

interface RequestInfo {
  type: 'folder' | 'item'
  folderId?: number | null
}

export async function fetchFavoriteList({ type, folderId }: RequestInfo) {
  const accessToken = getCookie('accessToken')
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
    if (type === 'item') throw new Error(data.message)
    if (type === 'folder') return data
  }

  return data
}

export const useFavoritesList = (
  type: 'folder' | 'item',
  folderId?: number | null,
) => {
  const { data: itemList, isSuccess } = useQuery({
    queryKey: voteKeys.favorites(folderId as number).queryKey,
    queryFn: () => fetchFavoriteList({ type, folderId }),
    staleTime: 1000 * 60,
    throwOnError: true,
  })

  return { itemList, isSuccess }
}
