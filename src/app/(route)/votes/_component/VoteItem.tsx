'use client'

/**
 * VoteItem 컴포넌트의 width, height는 호출하는 상위 태그에서 결정
 * index(/) 페이지에서 호출 시 이미지 크기 변경
 */

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cn } from '@/app/_utils/twMerge'

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
  path?: string
}

export default function VoteItem({ item, path }: VoteItemProps) {
  const router = useRouter()

  return (
    <div
      key={item.cursorId}
      className={cn(
        `h-full rounded-[8px] border border-[#E6E6E6] bg-red-500 bg-white px-[24px] pt-[12px]`,
      )}
    >
      <div
        className={cn(`flex justify-center`, {
          'h-[156px]': path,
          'h-[228px]': !path,
        })}
      >
        <Image
          width={path ? 127 : 170}
          height={path ? 156 : 208}
          src={item.item1Info.image}
          alt="vote item1"
        />
        <Image
          width={path ? 127 : 170}
          height={path ? 156 : 208}
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
      <div className="mt-[16px] flex justify-center">
        <button
          type="button"
          className={cn(
            'h-[48px] rounded-[8px] px-[26px] font-[600] text-[#fff]',
            {
              'bg-[#757575]': item.voteInfo.isVoting,
              'bg-[#CECECE]': !item.voteInfo.isVoting,
            },
          )}
          onClick={() => router.push(`/votes/${item.voteInfo.id}`)}
        >
          {item.voteInfo.isVoting ? '투표하러 가기' : '마감된 투표'}
        </button>
      </div>
    </div>
  )
}
