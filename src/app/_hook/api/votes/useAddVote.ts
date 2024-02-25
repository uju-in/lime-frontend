import { useMutation, useQueryClient } from '@tanstack/react-query'

import { getCookie } from '@/app/_utils/cookie'

import { VoteInfoType } from '@/app/_types/addVote.type'
import { voteKeys } from '.'

async function postAddItem(params: VoteInfoType) {
  const accessToken = await getCookie('accessToken')

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/votes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(params),
  })

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }

  return res.status
}

export default function useAddVote() {
  const queryClient = useQueryClient()

  return useMutation<number, Error, VoteInfoType>({
    mutationFn: postAddItem,
    onSuccess: () => {
      alert('투표 등록 성공!')

      queryClient.invalidateQueries({ queryKey: voteKeys.voteList._def })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
