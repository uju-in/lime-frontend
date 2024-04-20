'use client'

import { searchViewState } from '@/app/_atoms/searchViewState'
import Image from 'next/image'
import React from 'react'
import { useSetRecoilState } from 'recoil'

export default function SearchButton() {
  const setIsSearchView = useSetRecoilState(searchViewState)

  return (
    <button type="button" onClick={() => setIsSearchView(true)}>
      <Image
        className="cursor-pointer"
        width={22}
        height={22}
        src="/image/icon/icon-search.svg"
        alt="search"
      />
    </button>
  )
}
