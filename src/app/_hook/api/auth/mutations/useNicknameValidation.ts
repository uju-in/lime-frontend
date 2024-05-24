import renderToast from '@/app/_utils/toast'
import { useMutation } from '@tanstack/react-query'

async function postNicknameValidation(nickname: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/members/check/nickname
        `,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname }),
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data.message
  }

  const { isDuplicated } = data

  return isDuplicated
}

export default function useNicknameValidation() {
  return useMutation<boolean, unknown, string>({
    mutationFn: postNicknameValidation,
    onSuccess: (isDuplicated) => {
      if (isDuplicated) {
        renderToast({
          type: 'error',
          message: '중복된 닉네임입니다.',
        })
      } else {
        renderToast({
          type: 'success',
          message: '사용 가능한 닉네임입니다.',
        })
      }
    },
    onError: (error) => {
      renderToast({
        type: 'error',
        message: error as string,
      })
    },
  })
}
