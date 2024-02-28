import { getCookie } from '@/app/_utils/cookie'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import renderToast from '@/app/_utils/toast'
import { saveKeys } from '.'

export interface MoveSaveItemsRequest {
  folderId?: number
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
      renderToast({ type: 'success', message: '이동되었습니다.' })

      queryClient.invalidateQueries({ queryKey: saveKeys.saveList._def })
    },
    onError: (error) => {
      renderToast({ type: 'error', message: String(error) })
    },
  })
}
