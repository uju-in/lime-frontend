import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from '@/app/_utils/cookie'
import { reviewKeys } from '.'

interface EditReviewRequest {
  reviewId: number
  formData: FormData
}

async function postReviewData({ reviewId, formData }: EditReviewRequest) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/${reviewId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }

  return res.status
}

export default function useEditReview() {
  const queryClient = useQueryClient()

  return useMutation<number, Error, EditReviewRequest>({
    mutationFn: ({ reviewId, formData }) =>
      postReviewData({ reviewId, formData }),
    onSuccess: () => {
      alert('리뷰 수정 성공!')

      queryClient.invalidateQueries({ queryKey: reviewKeys.reviewList._def })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
