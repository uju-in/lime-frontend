'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Layout from '@/app/_components/layout/Layout'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { Item } from '../../items/_components/ItemList'

export default function SavesDetailPage() {
  const dropdownRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  /** 외부 클릭 시 dropdown 닫기 */
  useOutsideClick(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
    }
  })

  return (
    <Layout>
      <div className="flex items-center justify-center gap-[12px]">
        <h1 className="text-[38px] font-bold">농구</h1>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => {
              setIsDropdownOpen((prev) => !prev)
            }}
          >
            <Image
              width={32}
              height={32}
              src={
                isDropdownOpen
                  ? '/image/icon/icon-menu_active.svg'
                  : '/image/icon/icon-menu.svg'
              }
              alt="menu"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 top-[40px] h-[157px] w-[173px] rounded-[8px] bg-white p-[13px_6px] shadow-[0px_0px_5.85px_2.25px_rgba(0,0,0,0.10)]">
              <div className="mb-[10px] pl-[7px] text-[12px]">폴더 옵션</div>
              <ul className="text-[14px] font-medium">
                <li className="cursor-pointer rounded-[4px] p-[8px_7px] hover:bg-[#DFDFDF]">
                  이름 수정
                </li>
                <li className="cursor-pointer rounded-[4px] p-[8px_7px] hover:bg-[#DFDFDF]">
                  목록 편집
                </li>
                <li className="cursor-pointer rounded-[4px] p-[8px_7px] hover:bg-[#DFDFDF]">
                  폴더 삭제
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="my-[80px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fill,150px)] justify-center gap-x-[10px] gap-y-[25px]">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </Layout>
  )
}
