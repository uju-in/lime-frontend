import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from '@/app/_utils/cookie'
import { reviewKeys } from '.'

async function deleteReview(reviewId: number) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/${reviewId}`,
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

  return useMutation<void, Error, number>({
    mutationFn: (reviewId) => deleteReview(reviewId),
    onSuccess: () => {
      alert('리뷰 삭제 성공!')

      queryClient.invalidateQueries({
        queryKey: reviewKeys.reviewList._def,
      })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
