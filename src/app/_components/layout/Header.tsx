import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ItemSection from './ItemSection'

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between px-[150px] py-[23px]">
      <div className="flex items-center gap-[50px]">
        {/* 로고 */}
        <div className="pr-[50px] text-[35px] font-bold">
          <Link href="/">LIME</Link>
        </div>
        {/* 카테고리 */}
        <ul className="flex gap-[100px] text-[18px]">
          <li className="font-bold">
            {/* TODO: href 변경 */}
            <Link href="/">피드</Link>
          </li>
          <li className="font-bold">
            <Link href="/votes">투표</Link>
          </li>
          <li className="group relative flex gap-[8px]">
            <div className="font-bold">아이템</div>
            <Image
              className="cursor-pointer"
              width={20}
              height={20}
              src="/image/icon/icon-arrow_bottom.svg"
              alt="arrow_bottom"
            />
            <ItemSection />
          </li>
        </ul>
        {/* TODO: href 변경 */}
        <Link href="/" className="border-l px-[50px] font-bold">
          MY
        </Link>
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
