import { NextRequest, NextResponse } from 'next/server'
import { fetchTokenValidity } from './app/_hook/api/auth/useTokenValidity'

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value ?? ''

  const isValidToken = accessToken
    ? await fetchTokenValidity(accessToken)
    : false

  const url = new URL(request.url)
  const currentPath = url.pathname

  const redirectToLogin =
    ['/mypage', '/saves'].some((path) => currentPath.startsWith(path)) &&
    !isValidToken
  const redirectToHome =
    ['/login', '/join'].includes(currentPath) && isValidToken

  if (redirectToLogin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (redirectToHome) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/mypage', '/login', '/join', '/saves', '/saves/:path*'],
}
