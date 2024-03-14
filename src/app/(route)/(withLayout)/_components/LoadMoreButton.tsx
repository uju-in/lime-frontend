'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { SectionNameType } from '@/app/_types/home.type'
import { cn } from '@/app/_utils/twMerge'
import { getSectionPath } from '../../_utils/getSectionPath'

export default function LoadMoreButton({
  sectionName,
}: {
  sectionName: SectionNameType
}) {
  const router = useRouter()

  const handleClick = () => {
    const path = getSectionPath(sectionName)

    router.push(path)
  }

  return (
    <button
      type="button"
      className={cn(
        'flex h-[45px] w-[152px] items-center justify-center gap-[7.5px] rounded-[30px] bg-[#424242] text-[14px] font-[700] text-white',
        'mo:justify-end mo:bg-white',
      )}
      onClick={handleClick}
    >
      <span className="mo:hidden">{sectionName} 더보기</span>
      <span
        className={cn(
          'hidden text-[14px] font-[400]',
          'mo:block mo:text-[#A5A5A5]',
        )}
      >
        더보기
      </span>
      <Image
        width={18}
        height={18}
        src="/image/icon/icon-arrow_long_right_white.svg"
        alt="right arrow"
        className="mo:hidden"
      />
      <Image
        width={8}
        height={8}
        src="/image/icon/icon-arrow_right_A5A5A5.svg"
        alt="right arrow"
        className={cn('hidden', 'mo:block')}
      />
    </button>
  )
}
