import renderToast from '@/app/_utils/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { itemKeys } from '.'

async function postSaveToWishlist(itemIds: number[]): Promise<void> {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/items
        `,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ itemIds }),
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }
}

export default function useAddFavorites() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, number[]>({
    mutationFn: postSaveToWishlist,
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '아이템을 찜 목록에 담았습니다.',
      })

      queryClient.invalidateQueries({ queryKey: itemKeys.itemDetail._def })
    },
    onError: (error) => {
      renderToast({
        type: 'error',
        message: String(error),
      })
    },
  })
}
