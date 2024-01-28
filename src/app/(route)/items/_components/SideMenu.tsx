'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { CategoryOption } from '@/app/_constants'

export default function SideMenu() {
  const router = useRouter()
  const title = useGetSearchParam('title')
  const category = useGetSearchParam('category')

  const categoryList = CategoryOption.find((item) => {
    return item.title === title
  })

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Categories */}
      <div className="text-[25px] font-bold">{title}</div>
      <ul className="flex flex-col gap-[15px] text-[#575757]">
        {categoryList &&
          categoryList.list.map((item) => {
            return (
              <li
                key={item}
                className={`text-black ${
                  item === category ? 'font-bold' : 'font-normal'
                }`}
              >
                <a href={`/items?title=${title}&category=${item}`}>{item}</a>
              </li>
            )
          })}
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
