'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function SideMenu() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Categories */}
      <div className="text-[25px] font-bold">스포츠</div>
      <ul className="flex flex-col gap-[15px] text-[#575757]">
        <li className="font-bold text-black">농구</li>
        <li>야구</li>
        <li>배드민턴</li>
        <li>헬스</li>
        <li>클라이밍</li>
      </ul>
      {/* Buttons */}
      <div className="my-[50px] flex flex-col gap-[10px]">
        <button
          type="button"
          className="w-[120px] rounded-full bg-[#9c9c9c] py-[6px] text-white"
          onClick={() => {
            router.push('/saves/baseball')
          }}
        >
          찜 목록
        </button>
        <button
          type="button"
          className="w-[120px] rounded-full bg-[#9c9c9c] py-[6px] text-white"
        >
          아이템 생성
        </button>
      </div>
    </div>
  )
}
