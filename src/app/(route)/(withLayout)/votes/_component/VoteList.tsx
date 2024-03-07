'use client'

import { useVoteListData } from '@/app/_hook/api/votes/useVoteListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SortOption } from '../_constants'
import SortButtons from './SortButtons'
import VoteItem from './VoteItem'

export default function VoteList() {
  const hobby = useGetSearchParam('category') || '농구'

  const router = useRouter()

  const [sortOption, setSortOption] = useState(SortOption[0])

  const { voteList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useVoteListData(hobby, sortOption.value)

  return (
    <section>
      {voteList.length === 0 ? (
        <div className="mt-[186px] flex flex-col items-center gap-[29px]">
          <strong className="text-[20px] font-[500]">
            등록한 투표가 없어요.
          </strong>
          <button
            type="button"
            className="flex items-center gap-[6px]"
            onClick={() => router.push('/votes/add-vote')}
          >
            <Image
              width={15}
              height={15}
              src="/image/icon/icon-plus_858585.svg"
              alt="add vote"
            />
            <span className="font-[600] text-[#858585]">
              투표 생성하러 가기
            </span>
          </button>
        </div>
      ) : (
        <>
          <div className="mt-[43.14px] flex justify-end">
            <SortButtons
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>
          {/** Votes */}
          <article className="mt-[43.5px]">
            <div className="grid grid-cols-2 gap-[20px]">
              {voteList?.map((item) => (
                <div key={item.cursorId} className="h-[408px] w-[387px]">
                  <VoteItem item={item} />
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
        </>
      )}
    </section>
  )
}
