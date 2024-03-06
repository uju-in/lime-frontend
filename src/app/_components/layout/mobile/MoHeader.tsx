import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export namespace MoHeader {
  export function Back({ title }: { title: string }) {
    const router = useRouter()
    return (
      <header
        className={cn(
          'hidden items-center justify-between py-[10px]',
          'mo:flex',
        )}
      >
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/image/icon/icon-arrow_left_black.svg"
            width={8}
            height={15}
            alt="arrow left"
          />
        </button>
        <h1 className="text-[16px] font-semibold">{title}</h1>
        <div />
      </header>
    )
  }
}
