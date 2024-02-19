import Image from 'next/image'
import { fetchVoteRanking } from '@/app/_hook/api/useVoteranking'
import Link from 'next/link'

interface RankingInfo {
  id: number
  item1Image: string
  item2Image: string
  participants: number
}

export default async function RankingList({
  categoryParams,
}: {
  categoryParams: string
}) {
  const { rankingInfos } = await fetchVoteRanking(categoryParams)
  const { id, item1Image, item2Image, participants } = rankingInfos
  console.log(rankingInfos)
  return (
    <div className="mt-[22px] flex gap-[33.5px]">
      {/** 투표 랭킹 Item */}
      <Link href={`/votes/${id}`}>
        <div className="text-center">
          <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full border-[2px] border-[#D9D9D9]">
            <div className="flex h-[93px] w-[93px] rounded-full border">
              <Image
                width={93}
                height={93}
                src={item1Image}
                alt="vote item1"
                className="flex-1 rounded-l-full"
              />
              <Image
                width={93}
                height={93}
                src={item2Image}
                alt="vote item2"
                className="flex-1 rounded-l-full"
              />
            </div>
          </div>
          <p className="mt-[11.4px] text-[14.2px] font-[500] text-[#5D5D5D]">
            {participants}명 참여중
          </p>
        </div>
      </Link>
    </div>
  )
}
