import { getCookie } from '@/app/_utils/cookie'
import { useQuery } from '@tanstack/react-query'
import { saveKeys } from '.'

interface SaveListRequest {
  type: 'all' | 'folder' | 'item'
  folderId?: number
}

async function getSavesList({ type, folderId }: SaveListRequest) {
  const accessToken = await getCookie('accessToken')

  let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites`

  if (type === 'folder') {
    url += `?favoriteTypeCondition=${type}`
  }
  if (type === 'item' && folderId) {
    url += `?favoriteTypeCondition=${type}&folderId=${folderId}`
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const data = await response.json()

  return data
}

export default function useSaveList(
  type: 'all' | 'folder' | 'item',
  folderId?: number,
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: saveKeys.saveList(folderId || 0, type).queryKey,
    queryFn: () => getSavesList({ type, folderId }),
  })

  return {
    saveInfo: data,
    isLoading,
    isError,
  }
}
