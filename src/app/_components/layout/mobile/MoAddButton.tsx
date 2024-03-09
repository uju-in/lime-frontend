'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PropsType {
  path: string
}

export default function MoAddButton({ path }: PropsType) {
  const router = useRouter()

  return (
    <div
      className={cn(
        'fixed bottom-[72px] right-0 z-50 hidden h-[56px] w-[56px]',
        'mo:block',
      )}
    >
      <button
        type="button"
        className="h-[36px] w-[36px]  rounded-full bg-black p-[10px]"
        onClick={() => router.push(`/${path}/add-vote`)}
      >
        <Image
          width={18}
          height={18}
          src="/image/icon/icon-plus_white.svg"
          alt="add vote"
        />
      </button>
    </div>
  )
}
