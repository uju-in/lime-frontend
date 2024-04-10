import Image from 'next/image'
import { ReactNode } from 'react'

interface PropsType {
  isFetchingNextPage: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
  children: ReactNode
}

export default function InfiniteScrollTrigger({
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  children,
}: PropsType) {
  return (
    <>
      {' '}
      {isFetchingNextPage
        ? children
        : hasNextPage && (
            <button
              type="button"
              className="flex items-center gap-[8px]"
              onClick={() => fetchNextPage()}
            >
              <span className="text-[14px] font-[600] text-[#CCC]">더보기</span>
              <Image
                width={8}
                height={14}
                src="/image/icon/icon-arrow_bottom_BD.svg"
                alt="arrow bottom"
              />
            </button>
          )}
    </>
  )
}
