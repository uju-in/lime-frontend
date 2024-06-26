'use client'

import { useRequestToken } from '@/app/_hook/api/auth/apis/useRequestToken'
import { useEffect } from 'react'

export default function RedirectComponent() {
  const authLogin = useRequestToken()

  useEffect(() => {
    authLogin()
  }, [])

  return null
}
