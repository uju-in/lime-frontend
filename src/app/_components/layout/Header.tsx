import { CategoryOption } from '@/app/_constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between px-[150px] py-[23px]">
      <div className="flex items-center gap-[50px]">
        {/* 로고 */}
        <div className="pr-[50px] text-[35px] font-bold">
          <a href="/">LIME</a>
        </div>
        {/* 카테고리 */}
        <ul className="flex gap-[100px] text-[18px]">
          <li className="font-bold">
            {/* TODO: href 변경 */}
            <a href="/">피드</a>
          </li>
          <Link href="/votes">
            <li className="font-bold">투표</li>
          </Link>
          <li className="group relative flex gap-[8px]">
            <div className="font-bold">아이템</div>
            <Image
              className="cursor-pointer"
              width={20}
              height={20}
              src="/image/icon/icon-arrow_bottom.svg"
              alt="arrow_bottom"
            />
            <div className="absolute left-0 top-[40px] z-50 flex min-w-[300px] origin-top scale-y-0 transform divide-x rounded-[4px] bg-white py-[18px] text-[15px] text-[#575757] shadow-[0px_0px_7.8px_3px_rgba(0,0,0,0.10)] transition duration-300 ease-in-out group-hover:scale-y-100">
              {CategoryOption.map((items) => {
                const { title, list } = items
                return (
                  <ul
                    key={title}
                    className="flex flex-col gap-[13px] px-[30px]"
                  >
                    <li className="font-bold text-black">{title}</li>
                    {list.map((item) => {
                      return (
                        <li key={item}>
                          <a
                            className="hover:text-black"
                            href={`/items?title=${title}&category=${item}`}
                          >
                            {item}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )
              })}
            </div>
          </li>
        </ul>
        {/* TODO: href 변경 */}
        <a href="/" className="border-l px-[50px] font-bold">
          MY
        </a>
      </div>
      <div className="flex gap-[24px]">
        {/* 검색 */}
        <Image
          className="cursor-pointer"
          width={22}
          height={22}
          src="/image/icon/icon-search.svg"
          alt="search"
        />
        {/* 프로필 */}
        <div className="h-[33px] w-[33px] rounded-full bg-[#777]" />
      </div>
    </div>
  )
}
