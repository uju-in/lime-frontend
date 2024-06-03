'use client'

import InfiniteScrollTrigger from '@/app/_components/infiniteScrollTrigger'
import { VoteInfo } from '@/app/_types/vote.type'
import { cn } from '@/app/_utils/twMerge'
import VoteItem from './VoteItem'
import VoteItemSkeleton from './VoteItemSkeleton'

interface VoteListContentProps {
  voteList: VoteInfo[]
  fetchNextPage: () => void
  isFetchingNextPage: boolean
  hasNextPage: boolean
}

export default function VoteListContent({
  voteList,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: VoteListContentProps) {
  return (
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
  )
}
