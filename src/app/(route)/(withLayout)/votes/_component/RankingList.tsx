'use client'

import { useVoteRanking } from '@/app/_hook/api/votes/queries/useVoteRanking'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { cn } from '@/app/_utils/twMerge'
import Link from 'next/link'
import VoteImage from './VoteImage'

export default function RankingList() {
  const hobby = useGetSearchParam('category') || '농구'

  const { rankingList } = useVoteRanking(hobby)
  const { rankingInfos } = rankingList

  // 투표 랭킹 아이템이 없을 경우
  if (rankingInfos.length < 0) {
    return <div className="h-[104px]" />
  }

  return (
    <article className={cn('mt-[52px] w-full', 'mo:pl-[16px]')}>
      <h1 className="text-[26px] font-[700]">투표 랭킹</h1>
      <ul
        className={cn(
          'mt-[22px] flex gap-[33px] scrollbar-hide',
          'mo:gap-[12px] mo:overflow-x-scroll',
        )}
      >
        {rankingInfos.map((item) => (
          <li key={item.id} className="cursor-pointer text-center">
            <Link href={`/votes/${item.id}`}>
              <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full border-[2px] border-[#D9D9D9]">
                <figure className="flex h-[93px] w-[93px] rounded-full border">
                  <VoteImage
                    src={item.item1Image}
                    innerClassNames="rounded-l-full"
                  />
                  <VoteImage
                    src={item.item2Image}
                    innerClassNames="rounded-r-full"
                  />
                </figure>
              </div>
              <span className="mt-[11.4px] text-[14.2px] font-[500] text-[#5D5D5D]">
                {item.participants}명 참여중
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
