import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { reviewKeys } from '.'
import { useHandleApiError } from '../../common/useHandleApiError'

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

    throw data
  }
}

export default function useReviewLikeAction() {
  const queryClient = useQueryClient()
  const handleApiError = useHandleApiError()

  return useMutation<void, Error, ReviewLikeRequest>({
    mutationFn: ({ reviewId, isLiked }) =>
      postReviewLikeAction({ reviewId, isLiked }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: reviewKeys.reviewList._def })
    },
    onError: (error) => {
      handleApiError(error)
    },
  })
}
