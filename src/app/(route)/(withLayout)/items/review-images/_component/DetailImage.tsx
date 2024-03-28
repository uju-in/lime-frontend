'use client'

import { LocalStorage } from '@/app/_utils/localStorage'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

export default function DetailImage() {
  const imageUrls = useMemo(() => LocalStorage.imageUrls().getter(), [])

  const [selectedImageUrl, setSelectedImageUrl] = useState<string>(
    imageUrls[0] || '/image/icon/icon-close.svg',
  )

  useEffect(() => {
    if (imageUrls.length > 0) {
      setSelectedImageUrl(imageUrls[0])
    }
  }, [imageUrls])

  return (
    <section>
      <div className="mt-[94px] flex w-full justify-center">
        <Image
          width={375}
          height={375}
          src={selectedImageUrl}
          alt="detail review image"
        />
      </div>
      <div className="fixed bottom-[26px] left-0 flex h-[51px] w-full gap-[8px] px-[16px]">
        {imageUrls.map((imageUrl) => (
          <button
            type="button"
            key={imageUrl}
            onClick={() => setSelectedImageUrl(imageUrl)}
            className="focus:outline-none"
          >
            <Image
              width={51}
              height={51}
              src={imageUrl}
              alt="review image"
              className="cursor-pointer"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
