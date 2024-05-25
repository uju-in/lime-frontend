'use client'

import { detailDateFormatter } from '@/app/_utils/dateFormatter'

interface PropsType {
  endTime: string
  participants: number
}

export default function VoteProgressTracker({
  endTime,
  participants,
}: PropsType) {
  return (
    <>
      <span className="mt-[15px] text-[12px] font-[500] text-[#9C9C9C]">
        <time dateTime={new Date(endTime).toISOString()}>
          {detailDateFormatter(endTime)}
        </time>
        투표 마감
      </span>
      <br />
      <span className="text-[12px] font-[500] text-[#9C9C9C]">
        {participants}명 참여중
      </span>
    </>
  )
}
