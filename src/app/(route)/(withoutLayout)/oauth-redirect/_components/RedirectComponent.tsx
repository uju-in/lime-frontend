'use client'

import { useRequestToken } from '@/app/_hook/api/auth/useRequestToken'

export default function RedirectComponent() {
  useRequestToken()

  return <div />
}
