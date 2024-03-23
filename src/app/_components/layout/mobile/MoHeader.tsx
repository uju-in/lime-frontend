import useScrollDirection from '@/app/_hook/common/useScrollDirection'
import { LocalStorage } from '@/app/_utils/localStorage'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

export namespace MoHeader {
  export function Main({ title }: { title: string }) {
    const scrollDirection = useScrollDirection()

    return (
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-10 hidden h-[56px] items-center justify-between bg-white p-[16px] text-[18px] font-[700]',
          'mo:flex',
          {
            'mo:hidden': scrollDirection === 'down',
            'mo:flex': scrollDirection === 'up',
          },
        )}
      >
        <Link href="/">
          <strong>{title}</strong>
        </Link>
        <Link href="/mo-search">
          <Image
            src="/image/icon/icon-search_black.svg"
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </Link>
      </header>
    )
  }

  export function Back({ title }: { title: string }) {
    const router = useRouter()
    const scrollDirection = useScrollDirection()

    return (
      <header
        className={cn(
          'fixed left-0 right-0 top-0 hidden items-center justify-between bg-white py-[10px]',
          'mo:flex',
          {
            'mo:hidden': scrollDirection === 'down',
            'mo:flex': scrollDirection === 'up',
          },
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
        <div className="w-[24px]" />
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
    const scrollDirection = useScrollDirection()

    const handleSearch = useCallback(() => {
      router.push(`/search?keyword=${inputKeyword}`)

      if (inputKeyword.length === 0) return

      LocalStorage.search().add(inputKeyword)
    }, [inputKeyword, router])

    return (
      <header
        className={cn('flex items-center gap-[19px] px-[8px] py-[10px]', {
          'mo:hidden': scrollDirection === 'down',
          'mo:flex': scrollDirection === 'up',
        })}
      >
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
