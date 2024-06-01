'use client'

import { useModals } from '@/app/_hook/common/useModal'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

export default function VoteModalHeader() {
  const { close } = useModals()

  return (
    <header
      className={cn(
        'flex justify-between py-[20px] pl-[46px] pr-[18px]',
        'mo:hidden',
      )}
    >
      <strong className="text-[24px] font-[600]">찜목록</strong>
      <button
        type="button"
        aria-label="close"
        onClick={() => {
          close()
        }}
      >
        <Image
          width={24}
          height={24}
          src="/image/icon/icon-close.svg"
          alt="close"
        />
      </button>
    </header>
  )
}
