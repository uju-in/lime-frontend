'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { searchViewState } from '@/app/_atoms/searchViewState'
import { LocalStorage } from '@/app/_utils/localStorage'
import RQProvider from '../RQProvider'
import { RecentSearchKeyword } from './search/RecentSearchKeywordList'
import { SearchItemList } from './search/SearchItemList'

export default function Search() {
  const [inputKeyword, setInputKeyword] = useState('')
  const setIsSearchView = useSetRecoilState(searchViewState)
  const router = useRouter()

  const handleSearch = useCallback(() => {
    router.push(`/search?keyword=${inputKeyword}`)

    if (inputKeyword.length === 0) return

    LocalStorage.search().add(inputKeyword)

    setIsSearchView(false)
  }, [inputKeyword, router, setIsSearchView])

  return (
    <section>
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        className="h-[40px] w-[590px] rounded-b-none rounded-t-[4px] border border-[#bdbdbd] py-[9.5px] pl-[14px] pr-[45px] text-[14px] placeholder:text-[#bdbdbd] focus:outline-none"
        placeholder="찾고 싶은 아이템을 검색해보세요!"
        value={inputKeyword}
        onChange={(e) => setInputKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') handleSearch()
        }}
      />
      <button
        className="absolute right-[14px] top-[9px]"
        type="button"
        onClick={handleSearch}
      >
        <Image
          src="/image/icon/icon-search.svg"
          alt="search"
          width={24}
          height={24}
        />
      </button>
      {inputKeyword.length === 0 ? (
        <RecentSearchKeyword />
      ) : (
        <section className="absolute top-[40px] z-50 w-[590px] rounded-b-[4px] border border-t-0 border-[#bdbdbd] bg-white p-[22px_17px]">
          <RQProvider>
            <SearchItemList inputKeyword={inputKeyword} />
          </RQProvider>
        </section>
      )}
    </section>
  )
}
