import { useMutation, useQueryClient } from '@tanstack/react-query'
import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { reviewKeys } from '.'
import { itemKeys } from '../items'

interface EditReviewRequest {
  reviewId: number
  formData: FormData
}

async function postReviewData({ reviewId, formData }: EditReviewRequest) {
  const accessToken = getCookie('accessToken')

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
      renderToast({
        type: 'success',
        message: '리뷰를 수정했습니다.',
      })

      queryClient.invalidateQueries({ queryKey: reviewKeys.reviewList._def })
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
