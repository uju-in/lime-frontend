import { useMutation, useQueryClient } from '@tanstack/react-query'

import { getCookie } from '@/app/_utils/cookie'

interface EditReviewRequest {
  itemId: number
  reviewId: number
  formData: FormData
}

async function postReviewData({
  itemId,
  reviewId,
  formData,
}: EditReviewRequest) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}/reviews/${reviewId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  return res.status
}

export default function useEditReview() {
  const queryClient = useQueryClient()

  return useMutation<number, Error, EditReviewRequest>({
    mutationFn: ({ itemId, reviewId, formData }) =>
      postReviewData({ itemId, reviewId, formData }),
    onSuccess: () => {
      alert('리뷰 수정 성공!')

      queryClient.invalidateQueries({ queryKey: ['review'] })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
