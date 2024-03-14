'use client'

import useScrollDirection from '@/app/_hook/common/useScrollDirection'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'

export default function MoHomeHeader() {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-10 hidden h-[56px] items-center justify-between bg-white p-[16px] text-[18px] font-[700]',
        'mo:flex',
        {
          'mo:hidden': scrollDirection === 'down',
          'mo:flex': scrollDirection === 'up',
        },
      )}
    >
      <Link href="/">
        <strong>LIME</strong>
      </Link>
      <Link href="/mo-search">
        <Image
          src="/image/icon/icon-search_black.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </Link>
    </header>
  )
}
