'use client'

import { useVoteRanking } from '@/app/_hook/api/votes/useVoteRanking'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'

export default function RankingList() {
  const hobby = useGetSearchParam('category') || '농구'

  const { rankingList, isError } = useVoteRanking(hobby)
  const { rankingInfos } = rankingList

  if (isError) {
    return <div>Error. . . </div>
  }

  return (
    <section className={cn('mt-[52px] w-full', 'mo:pl-[16px]')}>
      {rankingInfos.length > 0 && (
        <>
          <p>
            <strong className="text-[26px] font-[700]">투표 랭킹</strong>
          </p>
          <div
            className={cn(
              'mt-[22px] flex gap-[33.5px] scrollbar-hide',
              'mo:gap-[12px] mo:overflow-x-scroll',
            )}
          >
            {/** Ranking Item */}
            {rankingInfos &&
              rankingInfos.map((item) => (
                <Link href={`/votes/${item.id}`} key={item.id}>
                  <div className="text-center">
                    <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full border-[2px] border-[#D9D9D9]">
                      <div className="flex h-[93px] w-[93px] rounded-full border">
                        <Image
                          width={46.5}
                          height={93}
                          src={item.item1Image}
                          alt="vote item1"
                          className="flex-1 rounded-l-full"
                        />
                        <Image
                          width={46.5}
                          height={93}
                          src={item.item2Image}
                          alt="vote item2"
                          className="flex-1 rounded-r-full"
                        />
                      </div>
                    </div>
                    <p className="mt-[11.4px] text-[14.2px] font-[500] text-[#5D5D5D]">
                      {item.participants}명 참여중
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </>
      )}
    </section>
  )
}
