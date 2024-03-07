'use client'

import Image from 'next/image'
import React from 'react'

export default function GoogleLoginButton() {
  return (
    <button
      className="flex h-[45px] w-[300px] items-center justify-center rounded-[8px] border border-[#DFDFDF] p-[10px]"
      type="button"
      onClick={() => {}}
    >
      <Image
        width={26}
        height={26}
        src="image/sns/google-icon.svg"
        alt="google-login"
      />
      <div className="flex-1 text-[14px]">구글 로그인</div>
    </button>
  )
}
