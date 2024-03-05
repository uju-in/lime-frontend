'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { SectionNameType } from '@/app/_types/home.type'
import { getSectionPath } from '../_utils/getSectionPath'

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
      className="flex h-[45px] w-[152px] items-center justify-center gap-[7.5px] rounded-[30px] bg-[#424242] text-[14px] font-[700] text-white"
      onClick={handleClick}
    >
      <span>{sectionName} 더보기</span>
      <Image
        width={18}
        height={18}
        src="/image/icon/icon-arrow_long_right_white.svg"
        alt="right arrow"
      />
    </button>
  )
}
