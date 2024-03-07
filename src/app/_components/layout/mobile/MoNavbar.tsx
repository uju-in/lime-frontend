'use client'

import { cn } from '@/app/_utils/twMerge'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

const NavList = [
  { label: '피드', url: '/feeds' },
  { label: '투표', url: '/votes' },
  { label: '홈', url: '/' },
  { label: '아이템', url: '/items' },
  { label: 'MY', url: '/mypage' },
]

export default function MoNavbar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'fixed bottom-0 z-50 hidden w-full border-t border-[#E0E0E0] bg-white px-[10px] py-[5px]',
        'mo:block',
      )}
    >
      <ul className="flex justify-between text-[12px] font-semibold text-[#828282]">
        {NavList.map(({ label, url }) => (
          <li
            key={label}
            className="flex cursor-pointer flex-col items-center gap-1 p-[10px]"
            onClick={() => {
              router.push(url)
            }}
          >
            <div
              className={cn('h-[23px] w-[23px] rounded-full', {
                'bg-[#686868]': pathname === url,
                'bg-[#E0E0E0]': pathname !== url,
              })}
            />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
