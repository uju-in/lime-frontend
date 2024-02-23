'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { cn } from '@/app/_utils/twMerge'
import { SortOption } from '../_constants'

interface PropsType {
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

export default function SortButtons(props: PropsType) {
  const { sortOption, setSortOption } = props

  const dropdownRef = useRef(null)

  const [showSortMenu, setShowSortMenu] = useState<boolean>(false)

  useOutsideClick(dropdownRef, () => {
    if (showSortMenu) {
      setShowSortMenu(false)
    }
  })

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        className="h-[14px relative flex w-[71px] items-center justify-end gap-[2px] text-[12px]"
        onClick={() => setShowSortMenu((prev) => !prev)}
      >
        <span>{sortOption.label}</span>
        <Image
          width={14}
          height={14}
          src={
            showSortMenu
              ? '/image/icon/icon-arrow_top.svg'
              : '/image/icon/icon-arrow_bottom.svg'
          }
          alt="arrow button"
        />
      </button>
      {showSortMenu && (
        <ul className="absolute left-[-14px] top-[24px] flex h-[92px] w-[88px] flex-col items-start justify-center gap-[10px] rounded-[4px] border-[1.5px] border-[#EDEDED] bg-white px-[17px] py-[11px] text-[11px]">
          {SortOption.map((item) => (
            <li
              className={cn('cursor-pointer font-[500]', {
                'text-black': item === sortOption,
                'text-[#868585]': item !== sortOption,
              })}
              key={item.label}
              onClick={() => {
                setSortOption(item)
                setShowSortMenu(false)
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
