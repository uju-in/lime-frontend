import { useMutation, useQueryClient } from '@tanstack/react-query'

import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { reviewKeys } from '.'
import { itemKeys } from '../items'

interface AddReviewRequest {
  itemId: number
  formData: FormData
}

async function postAddReview({ formData }: AddReviewRequest) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  })

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  return res.status
}

export default function useAddReview() {
  const queryClient = useQueryClient()

  return useMutation<number, Error, AddReviewRequest>({
    mutationFn: ({ itemId, formData }) => postAddReview({ itemId, formData }),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '리뷰를 등록했습니다.',
      })

      queryClient.invalidateQueries({
        queryKey: reviewKeys.reviewList._def,
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
