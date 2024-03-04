import React from 'react'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import { searchViewState } from '@/app/_atoms/searchViewState'
import { useRouter } from 'next/navigation'
import { LocalStorage } from '@/app/_utils/localStorage'

interface Props {
  keyword: string
  getList: () => void
}

export default function RecentSearchKeywordItem({ keyword, getList }: Props) {
  const setIsSearchView = useSetRecoilState(searchViewState)
  const router = useRouter()

  return (
    <li key={keyword} className="flex items-center justify-between">
      <button
        type="button"
        onClick={() => {
          setIsSearchView(false)
          router.push(`/search?keyword=${keyword}`)
          LocalStorage.search().add(keyword)
        }}
      >
        {keyword}
      </button>
      <button
        type="button"
        onClick={() => {
          LocalStorage.search().removeItem(keyword)
          getList()
        }}
      >
        <Image
          src="/image/icon/icon-close.svg"
          width={12}
          height={12}
          alt="close-button"
        />
      </button>
    </li>
  )
}
