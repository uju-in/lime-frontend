'use client'

import Link from 'next/link'

export default function EmptyMessage({
  menu,
  path,
}: {
  menu: string
  path: string
}) {
  return (
    <div className="flex h-full flex-col items-center gap-[26px] pt-[200px]">
      <strong className="text-[20px] font-[500]">등록한 {menu}가 없어요</strong>
      <Link href={path}>
        <span className="font-[600] text-[#858585]">
          등록한 {menu}가 없어요
        </span>
      </Link>
    </div>
  )
}
