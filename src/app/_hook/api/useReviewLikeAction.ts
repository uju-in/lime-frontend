import { useMutation, useQueryClient } from '@tanstack/react-query'

interface ReviewLikeRequest {
  itemId: number
  reviewId: number
  isLiked: boolean
}

async function postReviewLikeAction({
  itemId,
  reviewId,
  isLiked,
}: ReviewLikeRequest) {
  const accessToken = localStorage.getItem('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}/reviews/${reviewId}/like`,
    {
      method: isLiked ? 'DELETE' : 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  console.log(res)

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }
}

export default function useReviewLikeAction() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, ReviewLikeRequest>({
    mutationFn: ({ itemId, reviewId, isLiked }) =>
      postReviewLikeAction({ itemId, reviewId, isLiked }),
    onSuccess: () => {
      alert('성공!')

      queryClient.invalidateQueries({ queryKey: ['itemDetail'] })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
