import { useMutation, useQueryClient } from '@tanstack/react-query'

import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { reviewKeys } from '.'
import { itemKeys } from '../items'

async function deleteReview(reviewId: number) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/${reviewId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }
}

export default function useDeleteReview() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, number>({
    mutationFn: (reviewId) => deleteReview(reviewId),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '리뷰를 삭제했습니다.',
      })

      queryClient.invalidateQueries({
        queryKey: reviewKeys.reviewList._def,
      })
      queryClient.invalidateQueries({
        queryKey: itemKeys.itemDetail._def,
      })
    },
    onError: (error) => {
      renderToast({
        type: 'error',
        message: String(error),
      })
    },
  })
}
