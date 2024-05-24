import renderToast from '@/app/_utils/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { reviewKeys } from '..'
import { useHandleApiError } from '../../../common/useHandleApiError'
import { itemKeys } from '../../items'

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

    throw data
  }
}

export default function useDeleteReview() {
  const queryClient = useQueryClient()
  const handleApiError = useHandleApiError()

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
      handleApiError(error)
    },
  })
}
