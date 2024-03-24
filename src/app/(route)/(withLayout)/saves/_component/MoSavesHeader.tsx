'use client'

import { MoHeader } from '@/app/_components/layout/mobile/MoHeader'
import { cn } from '@/app/_utils/twMerge'
import React from 'react'

export default function MoSavesHeader() {
  return (
    <div className={cn('hidden', 'mo:block')}>
      <MoHeader.Save title="찜목록" />
    </div>
  )
}
