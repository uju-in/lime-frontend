'use client'

import React from 'react'
import Image from 'next/image'

const TOTAL_STAR = 5

export default function StarRating({ rate }: { rate: number }) {
  return (
    <div className="flex">
      {[...Array(TOTAL_STAR)].map((_, i) => (
        <Image
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="mr-[2px] cursor-pointer"
          width={12}
          height={12}
          src={`/image/icon/icon-${i < rate ? 'filled' : 'empty'}_star.svg`}
          alt="review grade"
        />
      ))}
    </div>
  )
}
