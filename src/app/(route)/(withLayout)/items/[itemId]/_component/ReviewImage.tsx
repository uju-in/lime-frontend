'use client'

import { LocalStorage } from '@/app/_utils/localStorage'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ReviewImage({
  imageUrls,
  mode,
}: {
  imageUrls: string[]
  mode?: string
}) {
  const displayImageCount =
    mode === 'mobile' ? Math.min(imageUrls.length, 2) : 1

  const router = useRouter()

  const handleMoreViewImage = () => {
    LocalStorage.imageUrls().setter(imageUrls)

    router.push('/items/review-images')
  }

  return (
    <div
      className={cn('relative', 'mo:py-[20px]', {
        'hidden mo:flex mo:gap-[8px]': mode === 'mobile',
        'mo:hidden': mode !== 'mobile',
      })}
    >
      {imageUrls.slice(0, displayImageCount).map((url) => (
        <Image
          key={url}
          width={80}
          height={80}
          src={url}
          alt="review image"
          className="cursor-pointer"
          onClick={() => {
            if (mode === 'mobile') {
              handleMoreViewImage()
            }
          }}
        />
      ))}
      {imageUrls.length > 1 && (
        <p
          className={cn(
            'absolute bottom-0 right-0 z-10 flex h-[22px] w-[22px] items-center justify-center bg-[#000] text-[12px] font-[500] text-[#fff]',
            'mo:hidden',
          )}
        >
          {imageUrls.length}
        </p>
      )}
    </div>
  )
}
