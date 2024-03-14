import React, { useEffect, useState } from 'react'
import { LocalStorage } from '@/app/_utils/localStorage'
import RecentSearchItem from './RecentSearchItem'

export default function RecentSearchList() {
  const [resultList, setResultList] = useState<string[]>([])

  const getList = () => {
    setResultList(LocalStorage.search().getter())
  }

  useEffect(() => {
    getList()
  }, [])

  return (
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
            <RecentSearchItem
              key={keyword}
              keyword={keyword}
              getList={getList}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
