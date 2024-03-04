import { LocalStorage } from '@/app/_utils/localStorage'
import { useEffect, useState } from 'react'
import RecentSearchKeywordItem from './RecentSearchKeywordItem'

export function RecentSearchKeyword() {
  const [resultList, setResultList] = useState<string[]>([])

  const getList = () => {
    setResultList(LocalStorage.search().getter())
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <section className="absolute top-[40px] z-50 w-[590px] rounded-b-[4px] border border-t-0 border-[#bdbdbd] bg-white p-[22px_17px]">
      <div className="flex flex-row justify-between border-b pb-[14px]">
        <h1 className="text-[14px] font-semibold">최근 검색어</h1>
        <button
          type="button"
          className="text-[12px] font-medium text-[#a9a9a9]"
          onClick={() => {
            LocalStorage.search().removeAll()
            getList()
          }}
        >
          모두 지우기
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-[12px] pt-[14px] text-[12px] font-medium text-[#535353]">
          {resultList.map((keyword) => (
            <RecentSearchKeywordItem
              key={keyword}
              keyword={keyword}
              getList={getList}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
