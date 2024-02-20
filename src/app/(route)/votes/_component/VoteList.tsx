'use client'

import { useVoteListData } from '@/app/_hook/api/useVoteListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function VoteList() {
  const hobby = useGetSearchParam('category') || '농구'

  const [sortOption, setSortOption] = useState<string>('recent')

  const { voteList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useVoteListData(hobby, sortOption)
  console.log(voteList)

  return (
    <section>
      {/** Sort Buttons */}
      <div className="mt-[43.14px] flex justify-end">
        <div className="relative">
          <button
            type="button"
            className="h-[14px relative flex w-[71px] items-center justify-end gap-[2px] text-[12px]"
          >
            <span>최신순</span>
            <Image
              width={14}
              height={14}
              src="/image/icon/icon-arrow_bottom.svg"
              alt="arrow button"
            />
          </button>
          <div className="absolute left-[-14px] top-[24px] flex h-[92px] w-[88px] flex-col items-start justify-center gap-[10px] rounded-[4px] border-[1.5px] border-[#EDEDED] bg-white px-[17px] py-[11px] text-[11px]">
            <button type="button" className="font-[600]">
              최신순
            </button>
            <button type="button" className="font-[500] text-[#868585]">
              인기순
            </button>
            <button type="button" className="font-[500] text-[#868585]">
              마감순
            </button>
          </div>
        </div>
      </div>

      {/** Votes */}
      <article className="mt-[43.5px]">
        <div className="grid grid-cols-2 gap-[20px]">
          {/** Vote Item */}
          {voteList.map((item) => (
            <Link href={`/votes/${item.voteInfo.id}`} key={item.cursorId}>
              <div className="h-[408px] w-[387px] rounded-[8px] border border-[#E6E6E6] px-[24px] pt-[24px]">
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
                    >
                      투표하러 가기
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/** 더보기 버튼 */}
        <div className="mt-[16.8px] flex h-[65px] items-start justify-center">
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
