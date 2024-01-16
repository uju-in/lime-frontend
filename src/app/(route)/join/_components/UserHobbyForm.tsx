import React from 'react'

import CategorySelector from '@/app/_components/categorySelector'

export default function UserHobbyForm() {
  return (
    <>
      <p className="font-[600]">대표 취미</p>
      <CategorySelector />
      <div className="mt-[36px]">
        <p className="mb-[16px] font-[600]">취미 경력</p>
        <select
          className="h-[48px] w-full rounded-[4px] border border-[#BDBDBD] bg-white px-[12px] text-[16px]"
          defaultValue="없음"
          required
        >
          <option value="" disabled>
            경력을 선택하세요
          </option>
          <option value="none">없음</option>
          <option value="1year">1년</option>
          <option value="2years">2년</option>
          <option value="3years">3년</option>
          <option value="5years">5년 이상</option>
          <option value="10years">10년 이상</option>
        </select>
      </div>
      <div className="h-[148px]">
        <button
          className="mt-[119px] flex h-[48px] w-[436px] items-center justify-center rounded-[4px] bg-black font-[600] text-white"
          type="submit"
        >
          회원가입
        </button>
      </div>
    </>
  )
}
