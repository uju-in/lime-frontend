import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from '@/app/_utils/cookie'
import { reviewKeys } from '.'

interface AddReviewRequest {
  itemId: number
  formData: FormData
}

async function postAddReview({ formData }: AddReviewRequest) {
  const accessToken = await getCookie('accessToken')

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
      alert('리뷰 등록 성공!')

      queryClient.invalidateQueries({
        queryKey: reviewKeys.reviewList._def,
      })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
