import { NextRequest, NextResponse } from 'next/server'
import { ERROR_CODE } from './app/_constants/error'
import { fetchTokenValidity } from './app/_hook/api/auth/apis/fetchTokenValidity'

interface ApiError {
  code?: string
  message: string
}

export async function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const currentPath = url.pathname
  const accessToken = request.cookies.get('accessToken')?.value ?? ''

  // 접근 제한이 필요한 경로
  const protectedPaths = [
    '/mypage',
    '/saves',
    '/items/add-item',
    '/votes/add-vote',
  ]
  const authPaths = ['/login', '/join']

  // 현재 경로가 로그인이나 회원가입 경로에 있을 경우, 추가 처리 없이 요청을 계속 진행
  if (authPaths.includes(currentPath)) {
    return NextResponse.next()
  }

  let isValidToken = false

  try {
    isValidToken = accessToken ? await fetchTokenValidity(accessToken) : false

    if (!isValidToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as ApiError).code === ERROR_CODE.INSUFFICIENT_PERMISSION
    ) {
      return NextResponse.redirect(new URL('/join', request.url))
    }
  }

  if (
    protectedPaths.some((path) => currentPath.startsWith(path)) &&
    !isValidToken
  ) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (authPaths.includes(currentPath) && isValidToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/login',
    '/join',
    '/mypage',
    '/saves',
    '/saves/:path*',
    '/items/add-item',
    '/votes/add-vote',
  ],
}
