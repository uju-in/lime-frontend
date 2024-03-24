'use client'

import React from 'react'
import { cn } from '@/app/_utils/twMerge'
import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'
import { useSearchParams } from 'next/navigation'

export default function MoSearchHeader() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword') || ''

  return (
    <div className={cn('hidden', 'mo:block')}>
      <MoHeader.Back title={`'${keyword}' 검색 결과`} />
      <h1 className="mt-[51px] block text-[21px] font-bold">아이템</h1>
    </div>
  )
}
