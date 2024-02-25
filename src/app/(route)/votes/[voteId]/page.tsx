import { fetchVoteDetail } from '@/app/_hook/api/votes/useVoteDetail'
import { dateFormatter } from '@/app/_utils/dateFormatter'
import ManagementButton from './_component/ManagementButton'
import { categoryFormatter } from '../../../_utils/categoryFormatter'
import VoteInfo from './_component/VoteInfo'

type Props = {
  params: { voteId: number }
}

export default async function pages({ params }: Props) {
  const { voteId } = params

  const voteData = await fetchVoteDetail(voteId)

  const { item1Info, item2Info, voteInfo, selectedItemId, isOwner } = voteData
  const { content, startTime, endTime, maxParticipants, participants } =
    voteInfo

  return (
    <section className=" min-h-[900px] w-[720px]">
      <article className="mt-[21px] h-[264px] rounded-[8px] border border-[#E6E6E6] px-[40px] py-[30px]">
        <div className="flex justify-between text-center text-[12px] font-[500]">
          <div className="flex gap-[6px]">
            <div className="h-[24px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]">
              {categoryFormatter(voteInfo.hobby)}
            </div>
            <div className="h-[24px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]">
              {voteInfo.hobby}
            </div>
          </div>
          {isOwner && <ManagementButton voteId={voteInfo.id} />}
        </div>
        <div className="mt-[18px] flex">
          <span className="flex h-[17px] gap-[4px] text-[12px] font-[500] text-[#747474]">
            {dateFormatter(startTime)} · 투표인원 {maxParticipants}명
          </span>
        </div>
        <p className="mt-[26px] h-[62px] text-[14px] font-[500]">{content}</p>
        <p className="mt-[15px] text-[10px] font-[500] text-[#9C9C9C]">
          {dateFormatter(endTime)} 투표 마감
        </p>
        <p className="text-[10px] font-[500] text-[#9C9C9C]">
          {participants}명 참여중
        </p>
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
