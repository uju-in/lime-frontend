'use client'

import { dateFormatter, detailDateFormatter } from '@/app/_utils/dateFormatter'
import { categoryFormatter } from '@/app/_utils/categoryFormatter'
import { useVoteDetail } from '@/app/_hook/api/votes/useVoteDetail'
import { VoteDetailType } from '@/app/_types/detailVote.type'
import { cn } from '@/app/_utils/twMerge'
import VoteInfo from './VoteInfo'
import ManagementButton from './ManagementButton'
import VoteProgressTracker from './VoteProgressTracker'

interface Props {
  voteId: number
}

export default function VoteDetail(props: Props) {
  const { voteId } = props

  const { voteData, isError, isSuccess } = useVoteDetail(voteId)

  const { item1Info, item2Info, voteInfo, selectedItemId, isOwner } =
    voteData as VoteDetailType
  const { content, startTime, endTime, maxParticipants, participants } =
    voteInfo

  if (isError) {
    return <div>Error. . . </div>
  }

  if (isSuccess) {
    return (
      <section className={cn('mx-auto min-h-[900px] w-[720px]', ' mo:w-full')}>
        <article
          className={cn(
            'mt-[21px] rounded-[8px] border border-[#E6E6E6] px-[40px] py-[30px]',
            ' mo:w-full mo:border-0 mo:px-[16px]',
          )}
        >
          <div
            className={cn(
              'flex justify-between text-center text-[12px] font-[500]',
              '',
            )}
          >
            <div className="flex gap-[6px]">
              <div
                className={cn(
                  'h-[24px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]',
                  'mo:bg-black mo:text-white',
                )}
              >
                {categoryFormatter(voteInfo.hobby)}
              </div>
              <div
                className={cn(
                  'h-[24px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]',
                  'mo:bg-black mo:text-white',
                )}
              >
                {voteInfo.hobby}
              </div>
            </div>
            {isOwner && <ManagementButton voteId={voteInfo.id} />}
          </div>
          <div className={cn('mt-[18px] flex', 'mo:mt-[8px]')}>
            <span className="flex h-[17px] gap-[4px] text-[12px] font-[500] text-[#747474]">
              {dateFormatter(startTime)} · 투표인원 {maxParticipants}명
            </span>
          </div>
          <p className="mt-[26px] text-[14px] font-[500]">{content}</p>
          <div className={cn('block', 'mo:hidden')}>
            <VoteProgressTracker
              endTime={endTime}
              participants={participants}
            />
          </div>
        </article>
        {/** 아이템 투표 */}
        <VoteInfo
          item1Info={item1Info}
          item2Info={item2Info}
          voteInfo={voteInfo}
          selectedItemId={selectedItemId}
        />
      </section>
    )
  }
}
