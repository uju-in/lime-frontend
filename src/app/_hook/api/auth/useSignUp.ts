import { useMutation } from '@tanstack/react-query'

import { SignUpState } from '@/app/_types/signUp.types'

async function postSignUp(params: SignUpState) {
  const accessToken = localStorage.getItem('accessToken')

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
    throw new Error('에러!!')
  }

  return res.status
}

export default function useSignUp() {
  return useMutation<number, unknown, SignUpState>({
    mutationFn: postSignUp,
    onSuccess: () => {
      alert('회원가입 성공!')
    },
    onError: () => {
      alert('회원가입 중 에러 발생')
    },
  })
}
