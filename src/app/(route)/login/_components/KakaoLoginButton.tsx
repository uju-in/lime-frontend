'use client'

import Image from 'next/image'
import React from 'react'

export default function KakaoLoginButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href =
          'https://api.uju-lime.shop/oauth2/authorization/kakao'
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
