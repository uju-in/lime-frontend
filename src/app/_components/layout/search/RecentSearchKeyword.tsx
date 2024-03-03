import { LocalStorage } from '@/app/_utils/localStorage'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function RecentSearchKeyword({
  setIsSearchView,
}: {
  setIsSearchView: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [resultList, setResultList] = useState<string[]>([])
  const router = useRouter()

  const getList = () => {
    setResultList(LocalStorage.search().getter())
  }

  useEffect(() => {
    getList()
  }, [])

  const handleRemoveKeyword = (keyword: string) => {
    LocalStorage.search().removeItem(keyword)
    getList()
  }

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
            <li key={keyword} className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setIsSearchView(false)
                  router.push(`/search?keyword=${keyword}`)
                }}
              >
                {keyword}
              </button>
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
