'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { LocalStorage } from '@/app/_utils/localStorage'
import { MoHeader } from '../layout/mobile/MoHeader'
import { SearchItemList } from '../layout/search/SearchItemList'
import RQProvider from '../RQProvider'

export default function Search() {
  const [resultList, setResultList] = useState<string[]>([])
  const [inputKeyword, setInputKeyword] = useState<string>('')
  const router = useRouter()

  const getList = () => {
    setResultList(LocalStorage.search().getter())
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="">
      <MoHeader.Search
        inputKeyword={inputKeyword}
        setInputKeyword={setInputKeyword}
      />
      {inputKeyword.length === 0 ? (
        <div className="px-[10px]">
          <div className="mt-[20px] flex flex-row justify-between">
            <h1 className="text-[14px] font-semibold">최근 검색어</h1>
            <button
              type="button"
              className="text-[12px] font-medium text-[#a9a9a9]"
              onClick={() => {
                LocalStorage.search().removeAll()
                getList()
              }}
            >
              전체삭제
            </button>
          </div>
          <div>
            <ul className="flex flex-wrap gap-x-[9px] gap-y-[5px] pt-[14px] text-[12px] font-medium">
              {resultList.map((keyword) => (
                <button
                  type="button"
                  key={keyword}
                  onClick={() => {
                    // setIsSearchView(false)
                    router.push(`/search?keyword=${keyword}`)
                    LocalStorage.search().add(keyword)
                  }}
                  className="flex cursor-pointer items-center gap-[4px] rounded-full bg-black p-[8px_12px] text-white"
                >
                  <span>{keyword}</span>
                  <Image
                    src="/image/icon/icon-close_white.svg"
                    alt="close"
                    width={14}
                    height={14}
                  />
                </button>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <RQProvider>
          <SearchItemList inputKeyword={inputKeyword} />
        </RQProvider>
      )}
    </div>
  )
}
