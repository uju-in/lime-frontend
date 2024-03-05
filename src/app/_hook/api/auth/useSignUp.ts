import { useMutation } from '@tanstack/react-query'

import { SignUpState } from '@/app/_types/signUp.types'
import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'

async function postSignUp(params: SignUpState) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/members/profile`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(params),
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }

  return res.status
}

export default function useSignUp() {
  return useMutation<number, unknown, SignUpState>({
    mutationFn: postSignUp,
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '회원가입 성공!',
      })
    },
    onError: (error) => {
      renderToast({
        type: 'error',
        message: error as string,
      })
    },
  })
}
