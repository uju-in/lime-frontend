import { useCookies } from 'next-client-cookies'

export function useClientCookies() {
  const cookies = useCookies()

  const setClientCookie = (key: string, value: string) => {
    cookies.set(key, encodeURIComponent(value))
  }

  const getClientCookie = (key: string) => {
    const cookieValue = cookies.get(key) ?? ''

    return decodeURIComponent(cookieValue)
  }

  const removeClientCookie = (key: string) => {
    cookies.remove(key)
  }

  return { setClientCookie, getClientCookie, removeClientCookie }
}
