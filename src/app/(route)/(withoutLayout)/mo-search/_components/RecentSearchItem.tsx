import React from 'react'
import Image from 'next/image'
import { LocalStorage } from '@/app/_utils/localStorage'
import { useRouter } from 'next/navigation'

interface Props {
  keyword: string
  getList: () => void
}

export default function RecentSearchItem({ keyword, getList }: Props) {
  const router = useRouter()

  const removeItem = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation()
    LocalStorage.search().removeItem(keyword)
    getList()
  }

  const moveSearchResultPage = () => {
    router.push(`/search?keyword=${keyword}`)
    LocalStorage.search().add(keyword)
  }

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-[4px] rounded-full bg-black p-[8px_12px] text-white hover:bg-slate-600"
      onClick={moveSearchResultPage}
    >
      <span>{keyword}</span>
      <Image
        onClick={removeItem}
        src="/image/icon/icon-close_white.svg"
        alt="close"
        width={14}
        height={14}
      />
    </button>
  )
}
