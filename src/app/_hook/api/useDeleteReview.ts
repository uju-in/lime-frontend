import { useMutation, useQueryClient } from '@tanstack/react-query'

import { getCookie } from '@/app/_utils/cookie'

interface DeleteReviewRequest {
  itemId: number
  reviewId: number
}

async function postAddReview({ itemId, reviewId }: DeleteReviewRequest) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}/reviews/${reviewId}`,
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

  return useMutation<void, Error, DeleteReviewRequest>({
    mutationFn: ({ itemId, reviewId }) => postAddReview({ itemId, reviewId }),
    onSuccess: () => {
      alert('리뷰 삭제 성공!')

      queryClient.invalidateQueries({ queryKey: ['review'] })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
