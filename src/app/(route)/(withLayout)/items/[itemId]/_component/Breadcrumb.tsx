'use client'

import { categoryFormatter } from '@/app/_utils/categoryFormatter'
import { cn } from '@/app/_utils/twMerge'

export default function Breadcrumb({
  hobbyName,
  innerClassNames,
}: {
  hobbyName: string
  innerClassNames: string
}) {
  return (
    <div
      className={cn(
        'mb-[8px] flex gap-[0_8px] text-[12px] font-[500] text-[#ADADAD]',
        innerClassNames,
      )}
    >
      <span>아이템</span>
      <span>&gt;</span>
      <span>{categoryFormatter(hobbyName)}</span>
      <span>&gt;</span>
      <span>{hobbyName}</span>
    </div>
  )
}
