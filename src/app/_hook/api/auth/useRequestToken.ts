'use client'

import { useRouter } from 'next/navigation'
import renderToast from '@/app/_utils/toast'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { setCookie } from 'cookies-next'

async function fetchAccessToken(code: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/kakao/callback?code=${code}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw Error(data.message)
  }

  return data
}

export function useRequestToken() {
  const router = useRouter()

  const code = useGetSearchParam('code')

  const authLogin = async () => {
    if (!code) {
      router.push('/login')

      renderToast({
        type: 'error',
        message: '비정상적인 로그인입니다. 다시 로그인해주세요.',
      })

      return
    }

    const { accessToken } = await fetchAccessToken(code)

    if (accessToken) {
      setCookie('accessToken', accessToken)

      router.push('/')
    }
  }

  return authLogin
}
