import { useMutation } from '@tanstack/react-query'

interface AddReviewRequest {
  itemId: number
  formData: FormData
}

async function postAddReview({ itemId, formData }: AddReviewRequest) {
  const accessToken = localStorage.getItem('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${itemId}/reviews`,
    {
      method: 'POST',
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

export default function useAddReview() {
  return useMutation<number, Error, AddReviewRequest>({
    mutationFn: ({ itemId, formData }) => postAddReview({ itemId, formData }),
    onSuccess: () => {
      alert('리뷰 등록 성공!')
    },
    onError: (error) => {
      alert(error)
    },
  })
}
