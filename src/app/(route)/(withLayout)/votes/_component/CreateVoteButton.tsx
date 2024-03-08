'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CreateVoteButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      className={cn(
        'flex h-[73px] w-[64px] flex-col items-center justify-center gap-[4px] rounded-[8px] border-2 border-black',
        'mo:hidden',
      )}
      onClick={() => router.push('/votes/add-vote')}
    >
      <Image
        width={24}
        height={24}
        src="/image/icon/icon-plus.svg"
        alt="add vote"
      />
      <span className="text-[12px] font-[600]">투표생성</span>
    </button>
  )
}
