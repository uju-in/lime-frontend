import { LocalStorage } from '@/app/_utils/localStorage'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'

export namespace MoHeader {
  export function Back({ title }: { title: string }) {
    const router = useRouter()
    return (
      <header
        className={cn(
          'hidden items-center justify-between py-[10px]',
          'mo:flex',
        )}
      >
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/image/icon/icon-back.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </button>
        <h1 className="text-[16px] font-semibold">{title}</h1>
        <div />
      </header>
    )
  }

  export function Search({
    inputKeyword,
    setInputKeyword,
  }: {
    inputKeyword: string
    setInputKeyword: React.Dispatch<React.SetStateAction<string>>
  }) {
    const router = useRouter()

    const handleSearch = useCallback(() => {
      router.push(`/search?keyword=${inputKeyword}`)

      if (inputKeyword.length === 0) return

      LocalStorage.search().add(inputKeyword)
    }, [inputKeyword, router])

    return (
      <header className="flex items-center gap-[19px] px-[8px] py-[10px]">
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/image/icon/icon-back.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </button>
        <input
          className="w-full rounded-full bg-black p-[10px_50px_10px_15px] text-[12px] text-[#DFDFDF] placeholder:text-[#DFDFDF] focus:outline-none"
          placeholder="찾고 싶은 아이템을 검색해보세요!"
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return
            if (e.key === 'Enter') handleSearch()
          }}
        />
        <button
          className="absolute right-[26px] top-[16px]"
          type="button"
          onClick={handleSearch}
        >
          <Image
            src="/image/icon/icon-search_dfdfdf.svg"
            alt="search"
            width={24}
            height={24}
          />
        </button>
      </header>
    )
  }
}
