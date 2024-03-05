import { useMutation, useQueryClient } from '@tanstack/react-query'
import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { reviewKeys } from '.'

interface ReviewLikeRequest {
  reviewId: number
  isLiked: boolean
}

async function postReviewLikeAction({ reviewId, isLiked }: ReviewLikeRequest) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/${reviewId}/like`,
    {
      method: isLiked ? 'DELETE' : 'POST',
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

export default function useReviewLikeAction() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, ReviewLikeRequest>({
    mutationFn: ({ reviewId, isLiked }) =>
      postReviewLikeAction({ reviewId, isLiked }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: reviewKeys.reviewList._def })
    },
    onError: (error) => {
      renderToast({
        type: 'error',
        message: String(error),
      })
    },
  })
}
