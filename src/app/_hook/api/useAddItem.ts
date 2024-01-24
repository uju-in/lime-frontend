import { useMutation } from '@tanstack/react-query'

import { ItemState } from '@/app/_types/addItem.type'

async function postAddItem(params: ItemState) {
  const accessToken = localStorage.getItem('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/enroll`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(params),
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  return res.status
}

export default function useAddItem() {
  return useMutation<number, unknown, ItemState>({
    mutationFn: postAddItem,
    onSuccess: () => {
      alert('아이템 등록 성공!')
    },
    onError: (error) => {
      alert(error)
    },
  })
}
