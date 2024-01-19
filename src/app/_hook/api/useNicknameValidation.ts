import { useMutation } from '@tanstack/react-query'

interface CheckNicknameResponse {
  isDuplicated: boolean
}

async function postCheckNickname(name: string | null) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/members/check/nickname
      `,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    },
  )

  if (!res.ok) {
    throw new Error('에러!!')
  }

  const data = await res.json()

  return data
}

export function useNicknameValidation() {
  return useMutation<CheckNicknameResponse, unknown, string | null>({
    mutationFn: postCheckNickname,
    onSuccess: ({ isDuplicated }) => {
      if (isDuplicated) {
        alert('닉네임이 중복됩니다.')
      } else {
        alert('닉네임 사용 가능.')
      }
    },
    onError: () => {
      alert('닉네임 체크 중 에러 발생')
    },
  })
}
