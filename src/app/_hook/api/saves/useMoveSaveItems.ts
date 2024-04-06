import { useMutation, useQueryClient } from '@tanstack/react-query'
import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { saveKeys } from '.'
import { useHandleApiError } from '../../common/useHandleApiError'

export interface MoveSaveItemsRequest {
  folderId?: number
  favoriteItemIds: number[]
}

async function postMoveSaveItems({
  folderId,
  favoriteItemIds,
}: MoveSaveItemsRequest) {
  const accessToken = getCookie('accessToken')

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

    throw data
  }

  return res.status
}

export default function useMoveSaveItems() {
  const queryClient = useQueryClient()
  const handleApiError = useHandleApiError()

  return useMutation<number, Error, MoveSaveItemsRequest>({
    mutationFn: ({ folderId, favoriteItemIds }) =>
      postMoveSaveItems({ folderId, favoriteItemIds }),
    onSuccess: () => {
      renderToast({ type: 'success', message: '이동되었습니다.' })

      queryClient.invalidateQueries({ queryKey: saveKeys.saveList._def })
    },
    onError: (error) => {
      handleApiError(error)
    },
  })
}
