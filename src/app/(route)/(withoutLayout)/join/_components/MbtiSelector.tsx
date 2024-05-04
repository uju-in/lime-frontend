'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { cn } from '@/app/_utils/twMerge'
import { MBTIOptions } from '../_constants'

interface Props {
  setMbti: (mbti: string) => void
  initialMBTI?: string | null
}

export default function MBTISelector({
  setMbti,
  initialMBTI = 'MBTI 유형 선택',
}: Props) {
  const dropdownRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const [selectedMBTI, setSelectedMBTI] = useState<string | null>(initialMBTI)

  useEffect(() => {
    setSelectedMBTI(initialMBTI)
  }, [initialMBTI])

  const handleSelectMBTI = (mbti: string) => {
    setSelectedMBTI(mbti)
    setMbti(mbti)
    setIsDropdownOpen(false)
  }

  useOutsideClick(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
    }
  })

  return (
    <div className="relative w-full text-[14px]">
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex h-[48px] w-full items-center justify-between rounded-[4px] border border-[#BDBDBD] px-4"
      >
        <span
          className={cn('font-[500]', {
            'text-[#BDBDBD]':
              selectedMBTI === 'MBTI 유형 선택' || selectedMBTI === null,
            'text-[#000]':
              selectedMBTI !== 'MBTI 유형 선택' && selectedMBTI !== null,
          })}
        >
          {selectedMBTI || initialMBTI}
        </span>
        <Image
          className="cursor-pointer"
          width={14}
          height={14}
          src={
            isDropdownOpen
              ? '/image/icon/icon-arrow_top_BD.svg'
              : '/image/icon/icon-arrow_bottom_BD.svg'
          }
          alt={isDropdownOpen ? 'arrow_top' : 'arrow_bottom'}
        />
      </button>
      {isDropdownOpen && (
        <ul
          ref={dropdownRef}
          className={cn(
            'absolute z-10 mt-3 h-[288px] w-full overflow-y-scroll rounded-[4px] bg-white shadow-[0px_0px_7.8px_3px_rgba(0,0,0,0.10)]',
            'mo:h-[192px]',
          )}
        >
          {MBTIOptions.map((option) => (
            <li
              key={option}
              className="flex h-[48px] cursor-pointer items-center pl-3 hover:bg-[#F2F2F2]"
              onClick={() => handleSelectMBTI(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
