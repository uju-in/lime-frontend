'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

export default function VoteModalHeader({
  setShowVoteModal,
}: {
  setShowVoteModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
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
          setShowVoteModal(false)
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
