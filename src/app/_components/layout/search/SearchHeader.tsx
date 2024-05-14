'use client'

import React, { useRef } from 'react'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import { searchViewState } from '@/app/_atoms/searchViewState'
import { useRecoilState } from 'recoil'
import Search from '../Search'

export default function SearchHeader() {
  const searchRef = useRef(null)
  const [isSearchView, setIsSearchView] = useRecoilState(searchViewState)

  useOutsideClick(searchRef, () => {
    if (isSearchView) {
      setIsSearchView(false)
    }
  })

  if (isSearchView)
    return (
      <div className="absolute top-0 z-50 mx-auto my-[23px] flex w-full max-w-full items-center justify-between bg-white px-[10px]">
        <div className="relative mx-auto h-[52.5px] w-fit" ref={searchRef}>
          <Search />
        </div>
      </div>
    )
  return null
}
