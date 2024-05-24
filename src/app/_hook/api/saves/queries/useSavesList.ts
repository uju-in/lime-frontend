import { useQuery } from '@tanstack/react-query'
import { saveKeys } from '..'
import { useClientCookies } from '../../../common/useClientCookies'

interface SaveListRequest {
  type: 'all' | 'folder' | 'item'
  folderId?: number
  accessToken: string
}

async function getSavesList({ type, folderId, accessToken }: SaveListRequest) {
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
  const { getClientCookie } = useClientCookies()
  const accessToken = getClientCookie('accessToken')

  const { data, isLoading, isError } = useQuery({
    queryKey: saveKeys.saveList(folderId || 0, type).queryKey,
    queryFn: () => getSavesList({ type, folderId, accessToken }),
  })

  return {
    saveInfo: data,
    isLoading,
    isError,
  }
}
