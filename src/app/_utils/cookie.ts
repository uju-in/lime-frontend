'use server'

import { cookies } from 'next/headers'

export const setCookie = (key: string, value: string) => {
  cookies().set(key, value)
}

export const getCookie = (key: string): any => {
  return cookies().get(key)?.value
}
