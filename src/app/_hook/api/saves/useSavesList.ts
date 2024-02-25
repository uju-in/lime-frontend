import { getCookie } from '@/app/_utils/cookie'
import { useQuery } from '@tanstack/react-query'

const getSavesList = async () => {
  const accessToken = await getCookie('accessToken')

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites`,
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

export default function useSaveList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['savesList'],
    queryFn: () => getSavesList(),
  })

  return {
    data,
    isLoading,
    isError,
  }
}
