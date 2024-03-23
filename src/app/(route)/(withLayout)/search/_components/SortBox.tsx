'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { SortOption } from '@/app/(route)/(withLayout)/items/_constants'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { cn } from '@/app/_utils/twMerge'

interface Props {
  sortOption: {
    label: string
    value: string
  }
  setSortOption: React.Dispatch<
    React.SetStateAction<{
      label: string
      value: string
    }>
  >
}

export default function SortBox(props: Props) {
  const { sortOption, setSortOption } = props
  const dropdownRef = useRef(null)

  const [showSortList, setShowSortList] = useState(false)

  useOutsideClick(dropdownRef, () => {
    if (showSortList) {
      setShowSortList(false)
    }
  })

  return (
    <div ref={dropdownRef} className="text-[12px]">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1"
        onClick={() => setShowSortList((prev) => !prev)}
      >
        <div>{sortOption.label}</div>
        <Image
          width={14}
          height={14}
          src="image/icon/icon-arrow_bottom.svg"
          alt="arrow_bottom"
        />
      </button>
      {showSortList && (
        <ul className="absolute right-0 top-[25px] z-50 flex flex-col gap-[5px] rounded-[4px] border border-[#ededed] bg-white p-[10px_15px] shadow-[0px_0px_5.85px_2.25px_rgba(0,0,0,0.10)]">
          {SortOption.map((item) => {
            return (
              <li
                className={cn('cursor-pointer hover:text-black', {
                  'font-semibold text-black': sortOption.value === item.value,
                  'font-normal text-[#868585]': sortOption.value !== item.value,
                })}
                key={item.value}
                onClick={() => {
                  setSortOption(item)
                  setShowSortList(false)
                }}
              >
                {item.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
