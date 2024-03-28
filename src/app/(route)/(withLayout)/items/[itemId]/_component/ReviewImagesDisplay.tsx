'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/app/_utils/twMerge'

interface ReviewImagesDisplayProps {
  existingImages: string[]
  newImages: File[]
  onImageDelete: (
    imageIndex: number,
    isExisting: boolean,
    imageUrl: string,
  ) => void
}

export default function ReviewImagesDisplay({
  existingImages,
  newImages,
  onImageDelete,
}: ReviewImagesDisplayProps) {
  const [newImageUrls, setNewImageUrls] = useState<string[]>([])

  useEffect(() => {
    const urls = newImages.map((file) => URL.createObjectURL(file))

    setNewImageUrls(urls)

    return () => urls.forEach((url) => URL.revokeObjectURL(url))
  }, [newImages])

  return (
    <div
      className={cn(
        'flex w-[508px] gap-2 overflow-y-hidden overflow-x-scroll',
        'mo:w-[250px]',
      )}
    >
      {existingImages.map((imageUrl: string, index: number) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="relative h-[96px] min-w-[96px] flex-shrink-0"
        >
          <Image src={imageUrl} alt="existing image" width={96} height={96} />
          <button
            type="button"
            className="absolute right-0 top-0 h-[28px] w-[28px] bg-[#000] text-[16px] text-[#fff] opacity-[0.7]"
            onClick={() => onImageDelete(index, true, imageUrl)}
          >
            X
          </button>
        </div>
      ))}
      {newImageUrls.map((imageUrl: string, index: number) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="relative h-[96px] min-w-[96px] flex-shrink-0"
        >
          <Image src={imageUrl} alt="update image" width={96} height={96} />
          <button
            type="button"
            className="absolute right-0 top-0 h-[28px] w-[28px] bg-[#000] text-[16px] text-[#fff] opacity-[0.7]"
            onClick={() => onImageDelete(index, false, imageUrl)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  )
}
