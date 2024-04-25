import { getCookies } from 'next-client-cookies/server'

export namespace serverCookies {
  const cookies = getCookies()

  export const setCookie = (key: string, value: string) => {
    cookies.set(key, encodeURIComponent(value))
  }

  export const getCookie = (key: string) => {
    const cookieValue = cookies.get(key) ?? ''

    return decodeURIComponent(cookieValue)
  }

  export const removeCookie = (key: string) => {
    cookies.remove(key)
  }
}
