import Image from 'next/image'
import Link from 'next/link'

const RECENT_KEYWORD = ['농구공', '나이키', '드로잉북']

export function RecentSearchKeyword() {
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
              <Link href={`/search?keyword=${keyword}`}>{keyword}</Link>
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
