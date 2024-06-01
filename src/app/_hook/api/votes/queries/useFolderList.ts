import { useClientCookies } from '@/app/_hook/common/useClientCookies'
import { useSuspenseQuery } from '@tanstack/react-query'
import { voteKeys } from '..'
import { fetchFavoriteList } from './useFavoritesList'

export const useFolderList = (type: 'folder' | 'item') => {
  const { getClientCookie } = useClientCookies()
  const accessToken = getClientCookie('accessToken')

  const { data: folderList } = useSuspenseQuery({
    queryKey: voteKeys.folderList.queryKey,
    queryFn: () => fetchFavoriteList({ type, accessToken }),
    staleTime: 1000 * 60,
  })

  return { folderList }
}
