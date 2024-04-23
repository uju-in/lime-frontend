import { useSuspenseQuery } from '@tanstack/react-query'
import { ProfileType } from '@/app/_types/mypage.type'
import { mypageKeys } from '.'

async function fetchUserProfile(): Promise<ProfileType> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/members/mypage/${'도라에몽'}`,
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

export const useUserProfile = () => {
  const { data: profile, isError } = useSuspenseQuery({
    queryKey: mypageKeys.userProfile.queryKey,
    queryFn: () => fetchUserProfile(),
    staleTime: 1000 * 60,
  })

  return { profile, isError }
}
