import React from 'react'
import Image from 'next/image'

import { fetchVoteDetail } from '@/app/_hook/api/useVoteDetail'
import { dateFormatter } from '@/app/_utils/dateFormatter'
import VoteInfo from './_component/VoteInfo'

export default async function pages() {
  const voteData = await fetchVoteDetail(1)

  const { item1Info, item2Info, voteInfo, isOwner } = voteData
  const { id, content, startTime, endTime, maxParticipants, participants } =
    voteInfo

  console.log(voteData)

  return (
    <section className=" min-h-[900px] w-[720px]">
      <article className="mt-[21px] h-[264px] rounded-[8px] border border-[#E6E6E6] px-[40px] py-[30px]">
        <div className="flex gap-[6px] text-center text-[12px] font-[500]">
          <div className="h-[24px] w-[51px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px] ">
            스포츠
          </div>
          <div className="h-[24px] w-[51px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]">
            농구
          </div>
        </div>
        {/** 유저 프로필 */}
        <div className="mt-[18px] flex">
          <div className="h-[40px] w-[40px] rounded-[40px] bg-[#D9D9D9]" />
          <div className="ml-[10px]">
            <div className=" flex h-[17px] font-[700]">
              <strong className="text-[14px]">밝은 노란색 치타</strong>
              <p className="ml-[9.65px] bg-[#000] px-[4px] py-[2px] text-[10px] text-[#fff]">
                Lv. 10
              </p>
            </div>
            <div className="mt-[4px] flex h-[17px] gap-[4px] text-[12px] font-[500] text-[#747474]">
              <span>{`${dateFormatter(
                startTime,
              )} · 투표인원 ${participants}명`}</span>
            </div>
          </div>
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
