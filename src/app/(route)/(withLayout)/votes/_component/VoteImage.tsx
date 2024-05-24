'use client'

import Image from 'next/image'

interface PropsType {
  src: string
  innerClassNames: string
}

export default function VoteImage({ src, innerClassNames }: PropsType) {
  return (
    <Image
      width={46}
      height={93}
      src={src}
      alt="vote image"
      className={`flex-1 ${innerClassNames}`}
      priority
    />
  )
}
