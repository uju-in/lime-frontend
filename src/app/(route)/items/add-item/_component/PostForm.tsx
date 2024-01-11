'use client'

import React from 'react'

import Categories from './Categories'

const sportCategories: string[] = [
  '농구',
  '야구',
  '배드민턴',
  '헬스',
  '클라이밍',
]

const lifeCategories: string[] = [
  '드로잉',
  '음악',
  '쿠킹',
  '게임',
  '데스크테리어',
]

export default function PostForm() {
  return (
    <form>
      <p className="text-xl font-semibold">
        아이템 추가할 취미를 선택해 주세요.
      </p>
      <p className="mt-8 text-[18px] font-[800px]">스포츠</p>
      <Categories categories={sportCategories} />
      <p className="mt-8 text-[18px] font-[800px]">라이프</p>
      <Categories categories={lifeCategories} />
      <p className="mb-6 mt-12 text-[18px] font-[800px]">
        아이템 추가할 URL을 입력하세요
      </p>
      <div className="flex  w-[690px] justify-between">
        <input className="h-[40px] w-[600px] rounded-[2px] border p-1 focus:outline-none" />
        <button
          className="h-[40px] w-[65px] rounded-[2px] bg-black text-[15px] text-white"
          type="button"
        >
          입력
        </button>
      </div>
      <div className=" mt-[65px] flex justify-center">
        <button
          className="h-[45px] w-[250px] rounded-[2px] bg-black text-[15px] text-white"
          type="submit"
        >
          생성하기
        </button>
      </div>
    </form>
  )
}
