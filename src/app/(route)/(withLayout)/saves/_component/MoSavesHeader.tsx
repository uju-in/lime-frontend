'use client'

import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'
import { cn } from '@/app/_utils/twMerge'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function MoSavesHeader() {
  const searchParams = useSearchParams()
  const title = searchParams.get('name') || ''

  return (
    <div className={cn('hidden', 'mo:block')}>
      <MoHeader.Save title={title} />
    </div>
  )
}
