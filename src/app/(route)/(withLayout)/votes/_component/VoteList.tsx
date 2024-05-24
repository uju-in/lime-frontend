'use client'

import { useVoteListData } from '@/app/_hook/api/votes/queries/useVoteListData'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { useState } from 'react'
import { SortOption } from '../_constants'
import EmptyVoteList from './EmptyVoteList'
import SortButtons from './SortButtons'
import VoteListContent from './VoteListContent'

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
          <VoteListContent
            voteList={voteList}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
          />
        </>
      )}
    </section>
  )
}
