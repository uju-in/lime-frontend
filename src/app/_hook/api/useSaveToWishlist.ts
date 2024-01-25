import { useMutation } from '@tanstack/react-query'

async function postSaveToWishlist(itemIds: number[]) {
  const accessToken = localStorage.getItem('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/myitems
        `,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ itemIds }),
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }
}

export default function useSaveToWishlist() {
  return useMutation<void, Error, number[]>({
    mutationFn: postSaveToWishlist,
    onSuccess: () => {
      alert('아이템을 찜 목록에 추가했습니다!')
    },
    onError: (error) => {
      alert(error)
    },
  })
}
