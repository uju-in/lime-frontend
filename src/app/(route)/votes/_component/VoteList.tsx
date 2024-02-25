'use client'

import { useVoteListData } from '@/app/_hook/api/votes/useVoteListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SortOption } from '../_constants'
import SortButtons from './SortButtons'

export default function VoteList() {
  const hobby = useGetSearchParam('category') || '농구'

  const router = useRouter()

  const [sortOption, setSortOption] = useState(SortOption[0])

  const { voteList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useVoteListData(hobby, sortOption.value)

  return (
    <section>
      {/** Sort Buttons */}
      <div className="mt-[43.14px] flex justify-end">
        <SortButtons sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      {/** Votes */}
      <article className="mt-[43.5px]">
        <div className="grid grid-cols-2 gap-[20px]">
          {voteList?.map((item) => (
            <div
              key={item.cursorId}
              className="h-[408px] w-[387px] rounded-[8px] border border-[#E6E6E6] px-[24px] pt-[24px]"
            >
              <div>
                <div className="flex h-[208px] w-[340px]">
                  <Image
                    width={170}
                    height={104}
                    src={item.item1Info.image}
                    alt="vote item1"
                  />
                  <Image
                    width={170}
                    height={104}
                    src={item.item2Info.image}
                    alt="vote item2"
                  />
                </div>
                <p className="mt-[18px] h-[45px] text-[14px] font-[500]">
                  {item.voteInfo.content}
                </p>
                <p className="mt-[9px] text-[10px] font-[500] text-[#9C9C9C]">
                  {item.voteInfo.participants}명 참여중
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="mt-[18px] h-[48px] w-[136ox] rounded-[8px] bg-[#757575] px-[26px] font-[600] text-[#fff]"
                    onClick={() => router.push(`/votes/${item.voteInfo.id}`)}
                  >
                    투표하러 가기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/** More Item Request */}
        <div className="flex h-[105px] items-start items-center justify-center">
          {isFetchingNextPage ? (
            <div>More Loading. . . </div>
          ) : (
            hasNextPage && (
              <button
                type="button"
                className="flex items-center gap-[8px]"
                onClick={() => fetchNextPage()}
              >
                <span className="text-[14px] font-[600] text-[#CCC]">
                  더보기
                </span>
                <Image
                  width={8}
                  height={14}
                  src="/image/icon/icon-arrow_bottom_BD.svg"
                  alt="arrow bottom"
                />
              </button>
            )
          )}
        </div>
      </article>
    </section>
  )
}
