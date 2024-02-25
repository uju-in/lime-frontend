'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import useOutsideClick from '@/app/_hook/common/useOutsideClick'

import { cn } from '@/app/_utils/twMerge'
import { CareerOption } from '@/app/_types/signUp.types'

import { careerOptions } from '../_constants/careerOptions'

interface CareerSelectorProps {
  setCareer: (value: number) => void
}

export default function CareerSelector({ setCareer }: CareerSelectorProps) {
  const dropdownRef = useRef(null)

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [careerLabel, setCareerLabel] = useState<string>('경력 기간 선택')

  const handleCareerChange = ({ label, value }: CareerOption) => {
    setCareer(value)
    setIsDropdownOpen(false)
    setCareerLabel(label)
  }

  /** 외부 클릭 시 dropdown 닫기 */
  useOutsideClick(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
    }
  })

  return (
    <>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex h-[48px] w-[436px] items-center justify-between rounded-[4px] border border-[#BDBDBD] px-4"
      >
        <p
          className={cn('text-[14px] font-[500]', {
            'text-[#BDBDBD]': careerLabel === '경력 기간 선택',
            'text-[#000]': careerLabel !== '경력 기간 선택',
          })}
        >
          {careerLabel}
        </p>
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
          className="absolute z-10 mt-3 h-[288px] w-[436px] overflow-y-scroll rounded-[4px] bg-white shadow-[0px_0px_7.8px_3px_rgba(0,0,0,0.10)]"
        >
          {careerOptions.map((item) => (
            <li
              key={item.label}
              className="flex h-[48px] cursor-pointer items-center pl-3 hover:bg-[#F2F2F2]"
              onClick={() => handleCareerChange(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
