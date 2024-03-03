import { revalidatePath, revalidateTag } from 'next/cache'
import { getCookie } from '@/app/_utils/cookie'
import renderToast from '@/app/_utils/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { voteKeys } from '.'

interface VoteItemRequest {
  itemId: number | null
  voteId: number
}

async function voteItem({ itemId, voteId }: VoteItemRequest): Promise<number> {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/${voteId}/participation
        `,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ itemId }),
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw Error(data.message)
  }

  return res.status
}

export const useParticipationVote = () => {
  const queryClient = useQueryClient()

  return useMutation<number, Error, VoteItemRequest>({
    mutationFn: ({ itemId, voteId }) => voteItem({ itemId, voteId }),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '투표 취소 성공!',
      })

      queryClient.invalidateQueries({
        queryKey: voteKeys.detail._def,
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
