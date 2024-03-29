'use client'

import Image from 'next/image'
import React from 'react'

export default function KakaoLoginButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=35267469080e7ac5febcef396de8852f&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}/oauth-redirect&response_type=code`
      }}
    >
      <Image
        width={300}
        height={45}
        src="/image/sns/kakao_login_large_wide.png"
        alt="kakao-login"
      />
    </button>
  )
}
