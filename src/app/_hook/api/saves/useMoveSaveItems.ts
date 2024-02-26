import { getCookie } from '@/app/_utils/cookie'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveKeys } from '.'

interface MoveSaveItemsRequest {
  folderId: number
  favoriteItemIds: number[]
}

async function postMoveSaveItems({
  folderId,
  favoriteItemIds,
}: MoveSaveItemsRequest) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/items/move`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ folderId, favoriteItemIds }),
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }

  return res.status
}

export default function useMoveSaveItems() {
  const queryClient = useQueryClient()

  return useMutation<number, Error, MoveSaveItemsRequest>({
    mutationFn: ({ folderId, favoriteItemIds }) =>
      postMoveSaveItems({ folderId, favoriteItemIds }),
    onSuccess: () => {
      alert('아이템 이동 완료')

      queryClient.invalidateQueries({ queryKey: saveKeys._def })
    },
    onError: (err) => {
      alert(err)
    },
  })
}
