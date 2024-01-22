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

  if (!res.ok) {
    throw new Error('에러!!')
  }

  const { isDuplicated } = await res.json()

  return isDuplicated
}

export default function useNicknameValidation() {
  return useMutation<boolean, unknown, string>({
    mutationFn: postNicknameValidation,
    onSuccess: (isDuplicated) => {
      if (isDuplicated) {
        alert('중복된 닉네임입니다.')
      } else {
        alert('사용 가능한 닉네임입니다.')
      }
    },
    onError: () => {
      alert('닉네임 체크 중 에러 발생')
    },
  })
}
