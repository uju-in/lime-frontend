'use client'

import { VoteDetailType } from '@/app/_types/detailVote.type'
import { categoryFormatter } from '@/app/_utils/categoryFormatter'
import { dateFormatter } from '@/app/_utils/dateFormatter'
import { cn } from '@/app/_utils/twMerge'
import ManagementButton from './ManagementButton'
import VoteProgressTracker from './VoteProgressTracker'

export default function VoteInfo({ voteData }: { voteData: VoteDetailType }) {
  const { isOwner, voteInfo } = voteData
  const {
    content,
    startTime,
    endTime,
    maxParticipants,
    participants,
    id,
    hobby,
  } = voteInfo

  return (
    <article
      className={cn(
        'mt-[21px] rounded-[8px] border border-[#E6E6E6] px-[40px] py-[30px]',
        ' mo:w-full mo:border-0 mo:px-[16px]',
      )}
    >
      {/** 카테고리  */}
      <div className="flex justify-between text-center text-[12px] font-[500]">
        <div className="flex gap-[6px]">
          <div
            className={cn(
              'h-[24px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]',
              'mo:bg-black mo:text-white',
            )}
          >
            {categoryFormatter(hobby)}
          </div>
          <div
            className={cn(
              'h-[24px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]',
              'mo:bg-black mo:text-white',
            )}
          >
            {hobby}
          </div>
        </div>
        {/** 작성자 관리 버튼  */}
        {isOwner && <ManagementButton voteId={id} />}
      </div>
      <div className={cn('mt-[18px] flex', 'mo:mt-[8px]')}>
        <span className="flex h-[17px] gap-[4px] text-[12px] font-[500] text-[#747474]">
          <time dateTime={new Date(startTime).toISOString()}>
            {dateFormatter(startTime)}
          </time>
          · 투표인원 {maxParticipants}명
        </span>
      </div>
      <p className="mt-[14px] break-all text-[14px] font-[500]">{content}</p>
      <div className={cn('block', 'mo:hidden')}>
        <VoteProgressTracker endTime={endTime} participants={participants} />
      </div>
    </article>
  )
}
