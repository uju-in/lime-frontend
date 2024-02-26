import { getCookie } from '@/app/_utils/cookie'
import { useQuery } from '@tanstack/react-query'
import { saveKeys } from '.'

const getSaveFolderDetail = async (folderId: number) => {
  const accessToken = await getCookie('accessToken')

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites?folderId=${folderId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  const data = await response.json()

  return data
}

export default function useSaveFolderDetail(folderId: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: saveKeys.detail._def,
    queryFn: () => getSaveFolderDetail(folderId),
  })

  return {
    data,
    isLoading,
    isError,
  }
}
