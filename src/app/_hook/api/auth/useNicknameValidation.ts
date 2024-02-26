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
        alert('중복된 닉네임입니다.')
      } else {
        alert('사용 가능한 닉네임입니다.')
      }
    },
    onError: (error) => {
      alert(error)
    },
  })
}
