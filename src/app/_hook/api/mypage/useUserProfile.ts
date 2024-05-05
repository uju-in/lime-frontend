import { useSuspenseQuery } from '@tanstack/react-query'
import { ProfileType } from '@/app/_types/mypage.type'
import { mypageKeys } from '.'

async function fetchUserProfile(nickname: string): Promise<ProfileType> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/members/mypage/${nickname}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useUserProfile = (nickname: string) => {
  const { data: profile } = useSuspenseQuery({
    queryKey: mypageKeys.userProfile(nickname).queryKey,
    queryFn: () => fetchUserProfile(nickname),
    staleTime: 1000 * 60,
  })

  return { profile }
}
