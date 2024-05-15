'use client'

/**
 * VoteItem 컴포넌트의 width, height는 호출하는 상위 태그에서 결정
 */

import { blurDataURL } from '@/app/_constants/images'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface VoteItemProps {
  item: {
    cursorId: string
    item1Info: { image: string }
    item2Info: { image: string }
    voteInfo: {
      content: string
      participants: number
      isVoting: boolean
      id: number
    }
  }
  width: number
  height: number
  innerClassNames?: string
}

export default function VoteItem(props: VoteItemProps) {
  const { item, width, height, innerClassNames } = props
  const { voteInfo, item1Info, item2Info } = item

  const router = useRouter()

  return (
    <div className="flex h-full flex-col rounded-[8px] border border-[#E6E6E6] px-[24px] pt-[12px]">
      <div className={cn('flex h-[156px] justify-center', innerClassNames)}>
        <Image
          className="flex-1 object-contain"
          src={item1Info.image}
          alt="vote item1"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <Image
          className="flex-1 object-contain "
          src={item2Info.image}
          alt="vote item2"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <p className="mt-[18px] h-[45px] text-[14px] font-[500]">
        {voteInfo.content}
      </p>
      <p className="mt-[9px] text-[10px] font-[500] text-[#9C9C9C]">
        {voteInfo.participants}명 참여중
      </p>
      <div className="mt-[16px] flex justify-center">
        <button
          type="button"
          className={cn(
            'h-[48px] rounded-[8px] px-[26px] font-[600] text-[#fff]',
            {
              'bg-[#757575]': voteInfo.isVoting,
              'bg-[#CECECE]': !voteInfo.isVoting,
            },
          )}
          onClick={() => router.push(`/votes/${voteInfo.id}`)}
        >
          {voteInfo.isVoting ? '투표하러 가기' : '마감된 투표'}
        </button>
      </div>
    </div>
  )
}
