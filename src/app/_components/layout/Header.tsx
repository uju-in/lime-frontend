'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { searchViewState } from '@/app/_atoms/searchViewState'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { cn } from '@/app/_utils/twMerge'
import React, { useRef } from 'react'
import ItemSection from './ItemSection'
import Search from './Search'

export default function Header() {
  const searchRef = useRef(null)
  const [isSearchView, setIsSearchView] = useRecoilState(searchViewState)

  useOutsideClick(searchRef, () => {
    if (isSearchView) {
      setIsSearchView(false)
    }
  })

  if (isSearchView)
    return (
      <div className="flex w-full items-center justify-between px-[150px] py-[23px]">
        <div className="relative mx-auto h-[52.5px] w-fit" ref={searchRef}>
          <Search />
        </div>
      </div>
    )

  return (
    <div
      className={cn(
        'flex w-full items-center justify-between px-[150px] py-[23px]',
        'mo:hidden',
      )}
    >
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
        <button type="button" onClick={() => setIsSearchView(true)}>
          <Image
            className="cursor-pointer"
            width={22}
            height={22}
            src="/image/icon/icon-search.svg"
            alt="search"
          />
        </button>
        {/* 프로필 */}
        <div className="h-[33px] w-[33px] rounded-full bg-[#777]" />
      </div>
    </div>
  )
}
