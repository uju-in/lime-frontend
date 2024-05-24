'use client'

import InfiniteScrollTrigger from '@/app/_components/infiniteScrollTrigger'
import { useVoteListData } from '@/app/_hook/api/votes/queries/useVoteListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { cn } from '@/app/_utils/twMerge'
import { useState } from 'react'
import { SortOption } from '../_constants'
import EmptyVoteList from './EmptyVoteList'
import SortButtons from './SortButtons'
import VoteItem from './VoteItem'
import VoteItemSkeleton from './VoteItemSkeleton'

export default function VoteList() {
  const hobby = useGetSearchParam('category') || '농구'

  const [sortOption, setSortOption] = useState(SortOption[0])

  const { voteList, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useVoteListData(hobby, sortOption.value)

  return (
    <section className="mo:px-[16px]">
      {voteList.length === 0 ? (
        <EmptyVoteList />
      ) : (
        <>
          <div className="mt-[43px] flex justify-end">
            <SortButtons
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>
          {/** Votes */}
          <article className="mt-[43px] w-full">
            <ul
              className={cn(
                'grid grid-cols-2 gap-[20px]',
                'mo:grid-cols-1 mo:gap-[16px]',
              )}
            >
              {voteList.map((item) => (
                <li
                  key={item.cursorId}
                  className={cn('h-[408px] w-[387px]', 'mo:w-full')}
                >
                  <VoteItem item={item} width={170} height={208} />
                </li>
              ))}
            </ul>
            {/** More Item Request */}
            <div className="flex justify-center gap-[20px] pb-[85px] pt-[32px]">
              <InfiniteScrollTrigger
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
              >
                <VoteItemSkeleton />
              </InfiniteScrollTrigger>
            </div>
          </article>
        </>
      )}
    </section>
  )
}
