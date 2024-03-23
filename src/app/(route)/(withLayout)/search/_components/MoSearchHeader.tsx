import React from 'react'
import { cn } from '@/app/_utils/twMerge'

export default function MoSearchHeader() {
  return (
    <div className={cn('hidden', 'mo:block')}>
      <h1 className="block text-[24px] font-bold">아이템</h1>
    </div>
  )
}
