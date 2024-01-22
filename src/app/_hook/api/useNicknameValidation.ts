import { useMutation } from '@tanstack/react-query'

async function postCheckNickname(nickname: string) {
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
  console.log(res)

  const data = await res.json()

  console.log(data)
  return data
}

export function useNicknameValidation() {
  return useMutation<any, unknown, string>({
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
