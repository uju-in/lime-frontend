'use server'

import { cookies } from 'next/headers'

export const setServerCookie = (key: string, value: string) => {
  cookies().set(key, encodeURIComponent(value))
}

export const getServerCookie = (key: string) => {
  const cookieValue = cookies().get(key)?.value ?? ''

  return decodeURIComponent(cookieValue)
}

export const deleteServerCookie = (key: string) => {
  cookies().delete(key)
}
