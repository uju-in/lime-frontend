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
      <p className="mt-[15px] text-[12px] font-[500] text-[#9C9C9C]">
        {detailDateFormatter(endTime)} 투표 마감
      </p>
      <p className="text-[12px] font-[500] text-[#9C9C9C]">
        {participants}명 참여중
      </p>
    </>
  )
}
