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

  if (voteList.length === 0) {
    return <EmptyVoteList />
  }

  return (
    <section className="mo:px-[16px]">
      <div className="mt-[43px] flex justify-end">
        <SortButtons sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <VoteListContent
        voteList={voteList}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
    </section>
  )
}
