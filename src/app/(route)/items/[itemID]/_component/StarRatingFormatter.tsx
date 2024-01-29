'use client'

import React from 'react'
import Image from 'next/image'

interface PropsType {
  rating: number
  setRate: (value: number) => void
}

const TOTAL_STAR = 5

export default function StarRatingFormatter(props: PropsType) {
  const { rating, setRate } = props

  const handleStarClick = (starIndex: number) => {
    setRate(starIndex + 1)
  }

  return (
    <>
      {[...Array(TOTAL_STAR)].map((_, i) => (
        <Image
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          src={`/image/icon/icon-${i < rating ? 'filled' : 'empty'}_star.svg`}
          alt="star"
          width={56}
          height={56}
          className="cursor-pointer"
          onClick={() => handleStarClick(i)}
          aria-label="rating start"
        />
      ))}
    </>
  )
}
