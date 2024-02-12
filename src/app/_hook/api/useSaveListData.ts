import { useQuery } from '@tanstack/react-query'

import { getCookie } from '@/app/_utils/cookie'

import { SaveItemListType } from '@/app/_types/saveItem.type'

async function fetchSaveList() {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/myitems
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

export const useSaveListData = () => {
  const { data, isLoading, isError, isSuccess } = useQuery<
    SaveItemListType,
    Error
  >({
    queryKey: ['save'],
    queryFn: () => fetchSaveList(),
    staleTime: 1000 * 60,
  })

  return { data, isLoading, isError, isSuccess }
}
