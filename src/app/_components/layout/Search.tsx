'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const RECENT_KEYWORD = ['농구공', '나이키', '드로잉북']

function RecentSearchKeyword() {
  const handleRemoveKeyword = (keyword: string) => {
    console.log(keyword)
  }

  return (
    <section className="absolute top-[40px] z-50 w-[590px] rounded-b-[4px] border border-t-0 border-[#bdbdbd] bg-white p-[22px_17px]">
      <div className="flex flex-row justify-between border-b pb-[14px]">
        <h1 className="text-[14px] font-semibold">최근 검색어</h1>
        <button
          type="button"
          className="text-[12px] font-medium text-[#a9a9a9]"
        >
          모두 지우기
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-[12px] pt-[14px] text-[12px] font-medium text-[#535353]">
          {RECENT_KEYWORD.map((keyword) => (
            <li key={keyword} className="flex items-center justify-between">
              <Link href={`/items?keyword=${keyword}`}>{keyword}</Link>
              <button
                type="button"
                onClick={() => handleRemoveKeyword(keyword)}
              >
                <Image
                  src="/image/icon/icon-close.svg"
                  width={12}
                  height={12}
                  alt="close-button"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SearchItemList({ inputKeyword }: { inputKeyword: string }) {
  return (
    <section className="absolute top-[40px] z-50 w-[590px] rounded-b-[4px] border border-t-0 border-[#bdbdbd] bg-white p-[22px_17px]">
      <ul className="text-[12px] text-[#535353]">
        <li>
          <span className="font-semibold text-black">{inputKeyword}</span> 가방
        </li>
      </ul>
    </section>
  )
}

export default function Search() {
  const [inputKeyword, setInputKeyword] = useState('')

  return (
    <section>
      <input
        className="h-[40px] w-[590px] rounded-b-none rounded-t-[4px] border border-[#bdbdbd] py-[9.5px] pl-[14px] pr-[45px] text-[14px] placeholder:text-[#bdbdbd] focus:outline-none"
        placeholder="찾고 싶은 아이템을 검색해보세요!"
        value={inputKeyword}
        onChange={(e) => setInputKeyword(e.target.value)}
      />
      <Image
        className="absolute right-[14px] top-[9px]"
        src="/image/icon/icon-search.svg"
        alt="search"
        width={24}
        height={24}
      />
      {inputKeyword.length === 0 ? (
        <RecentSearchKeyword />
      ) : (
        <SearchItemList inputKeyword={inputKeyword} />
      )}
    </section>
  )
}
