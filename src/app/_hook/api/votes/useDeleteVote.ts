import { useMutation, useQueryClient } from '@tanstack/react-query'
import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { voteKeys } from '.'

async function deleteVote(voteId: number): Promise<number> {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}`,
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

  return res.status
}

export const useDeleteVote = () => {
  const queryClient = useQueryClient()

  return useMutation<number, Error, number>({
    mutationFn: (voidId) => deleteVote(voidId),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '투표 삭제 성공!',
      })

      queryClient.invalidateQueries({
        queryKey: voteKeys.voteList._def,
      })
      queryClient.invalidateQueries({
        queryKey: voteKeys.voteRanking._def,
      })
    },
    onError: (error) => {
      renderToast({
        type: 'error',
        message: String(error),
      })
    },
  })
}
