import React from 'react'
import Link from 'next/link'
import { GoogleLoginButton, KakaoLoginButton } from './_components'

export default function page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      {/* 로고 */}
      <div className="text-[48px] font-bold">LIME</div>
      {/* 소셜 로그인 버튼 */}
      <div className="my-[62px] flex flex-col gap-[11px]">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
      {/* 이용 약관 */}
      <div className="text-[10px] text-[#787878] [&>a]:underline">
        로그인하면 LIME의 <Link href="/">개인정보처리방침</Link>과{' '}
        <Link href="/">이용 약관</Link>에 동의한 것으로 간주합니다.
      </div>
    </div>
  )
}
