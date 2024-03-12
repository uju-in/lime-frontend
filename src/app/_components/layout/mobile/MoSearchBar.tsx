'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

interface PropsType {
  path: string
}

export default function MoSearchBar({ path }: PropsType) {
  return (
    <div
      className={cn(
        'mx-auto flex hidden h-[36px] w-11/12 rounded-[100px] bg-black px-[16px]',
        'mo:flex',
      )}
    >
      <input
        className="h-full w-full bg-black text-[14px] font-[500] text-[#DFDFDF] outline-0"
        placeholder={`${path}를 검색해 보세요.`}
      />
      <Image
        className="cursor-pointer"
        width={24}
        height={24}
        src="/image/icon/icon-search_DFDFDF.svg"
        alt="search"
      />
    </div>
  )
}
