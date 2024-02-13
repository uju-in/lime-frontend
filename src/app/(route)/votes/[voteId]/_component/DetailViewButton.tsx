'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function DetailViewButton({ itemId }: { itemId: number }) {
  const router = useRouter()

  return (
    <button
      type="button"
      className="flex h-[24px] w-[80px] items-center justify-center rounded-[100px] border-[0.385px] border-[#000] px-[11.8px]"
      onClick={() => router.push(`/items/${itemId}`)}
    >
      <span className="mr-[1.54px] text-[10px] font-[500]">상세 보기</span>
      <Image
        width={10.322}
        height={10.322}
        src="/image/icon/icon-arrow_long_right.svg"
        alt="right arrow"
      />
    </button>
  )
}
