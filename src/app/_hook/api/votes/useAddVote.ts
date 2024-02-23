import { useMutation } from '@tanstack/react-query'

import { getCookie } from '@/app/_utils/cookie'

import { VoteInfoType } from '@/app/_types/addVote.type'

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
  return useMutation<number, Error, VoteInfoType>({
    mutationFn: postAddItem,
    onSuccess: () => {
      alert('투표 등록 성공!')

      /** 투표 쿼리 키 지정 후 변경 필요 */
      // queryClient.invalidateQueries({ queryKey: [contactsKey.users] });
    },
    onError: (error) => {
      alert(error)
    },
  })
}
