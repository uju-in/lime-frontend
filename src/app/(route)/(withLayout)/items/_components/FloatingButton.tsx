'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <div
      className={cn(
        'fixed bottom-[90px] right-[16px] hidden flex-col gap-[8px]',
        'mo:flex',
      )}
    >
      {isOpen && (
        <>
          <button
            onClick={() => {
              router.push('/saves')
            }}
            type="button"
            className="rounded-full bg-[#595959] p-[10px]"
          >
            <Image
              src="/image/icon/icon-save_white.svg"
              width={36}
              height={36}
              alt="save"
            />
          </button>
          <button
            onClick={() => {
              router.push('/items/add-item')
            }}
            type="button"
            className="rounded-full bg-[#595959] p-[10px]"
          >
            <Image
              src="/image/icon/icon-plus_white_36.svg"
              width={36}
              height={36}
              alt="plus"
            />
          </button>
        </>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        className={cn('rounded-full bg-black p-[10px] duration-150', {
          'rotate-90': isOpen,
        })}
      >
        <Image
          src="/image/icon/icon-more.svg"
          width={36}
          height={36}
          alt="more"
        />
      </button>
    </div>
  )
}
