import renderToast from '@/app/_utils/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { voteKeys } from '..'
import { useHandleApiError } from '../../../common/useHandleApiError'

async function reVote(voteId: number): Promise<void> {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}/cancel
        `,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw Error(data.message)
  }
}

export const useReParticipation = () => {
  const queryClient = useQueryClient()
  const handleApiError = useHandleApiError()

  return useMutation<void, Error, number>({
    mutationFn: (voidId) => reVote(voidId),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '투표 취소 성공!',
      })

      queryClient.invalidateQueries({
        queryKey: voteKeys.detail._def,
      })
      queryClient.invalidateQueries({
        queryKey: voteKeys.voteList._def,
      })
      queryClient.invalidateQueries({
        queryKey: voteKeys.voteRanking._def,
      })
    },
    onError: (error) => {
      handleApiError(error)
    },
  })
}
