import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { cn } from '@/app/_utils/twMerge'
import { fetchTokenValidity } from '@/app/_hook/api/auth/useTokenValidity'
import React from 'react'
import ItemSection from './ItemSection'
import SearchButton from './search/SearchButton'

export default async function Header() {
  let isValidToken = false
  try {
    const accessToken = cookies().get('accessToken')?.value
    isValidToken = accessToken ? await fetchTokenValidity(accessToken) : false
  } catch (e) {
    console.error(e)
  }

  return (
    <div
      className={cn(
        'mx-auto my-[23px] flex w-[1200px] max-w-full items-center justify-between px-[10px]',
        'mo:hidden',
      )}
    >
      <div className="flex items-center gap-[40px]">
        {/* 로고 */}
        <div className="pr-[50px] text-[35px] font-bold">
          <Link href="/">LIME</Link>
        </div>
        {/* 카테고리 */}
        <ul className="flex gap-[80px] text-[18px]">
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
        <Link href="/mypage" className="border-l px-[50px] font-bold">
          MY
        </Link>
      </div>
      <div className="flex gap-[24px]">
        {/* 로그인 버튼 */}
        {!isValidToken ? (
          <Link href="/login" className="flex items-center">
            Login
          </Link>
        ) : (
          <div className="h-[33px] w-[33px] rounded-full bg-[#777]" />
        )}
        {/* 검색 */}
        <SearchButton />
      </div>
    </div>
  )
}
