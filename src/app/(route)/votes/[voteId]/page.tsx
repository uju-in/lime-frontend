import React from 'react'

import { fetchVoteDetail } from '@/app/_hook/api/useVoteDetail'

import { dateFormatter } from '@/app/_utils/dateFormatter'

import VoteInfo from './_component/VoteInfo'

export default async function pages() {
  const voteData = await fetchVoteDetail(2)

  const { item1Info, item2Info, voteInfo, isOwner } = voteData
  const { id, content, startTime, endTime, maxParticipants, participants } =
    voteInfo

  console.log(voteData)

  return (
    <section className=" min-h-[900px] w-[720px]">
      <article className="mt-[21px] h-[264px] rounded-[8px] border border-[#E6E6E6] px-[40px] py-[30px]">
        <div className="flex gap-[6px] text-center text-[12px] font-[500]">
          <div className="h-[24px] w-[51px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px] ">
            {voteInfo.hobby}
          </div>
        </div>
        {/** 유저 프로필 */}
        <div className="mt-[18px] flex">
          <span className="flex h-[17px] gap-[4px] text-[12px] font-[500] text-[#747474]">{`${dateFormatter(
            startTime,
          )} · 투표인원 ${participants}명`}</span>
        </div>
        <p className="mt-[26px] h-[62px] text-[14px] font-[500]">{content}</p>
        <p className="mt-[15px] text-[10px] font-[500] text-[#9C9C9C]">
          {`${dateFormatter(endTime)} 투표 마감`}
        </p>
        <p className="text-[10px] font-[500] text-[#9C9C9C]">{`${participants}명 참여중`}</p>
      </article>
      {/** 아이템 투표 */}
      <VoteInfo
        item1Info={item1Info}
        item2Info={item2Info}
        voteInfo={voteInfo}
      />
    </section>
  )
}
