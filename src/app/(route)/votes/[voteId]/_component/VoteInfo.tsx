'use client'

import React, { useCallback, useState } from 'react'
import { voteItem } from '@/app/_hook/api/votes/useParticipationVote'
import { ItemInfoType, VoteInfoType } from '@/app/_types/detailVote.type'
import { reVote } from '@/app/_hook/api/votes/useReParticipation'
import ProgressBar from './ProgressBar'
import VoteItem from './VoteItem'

interface PropsType {
  item1Info: ItemInfoType
  item2Info: ItemInfoType
  voteInfo: VoteInfoType
  selectedItemId: number | null
}

export default function VoteInfo(props: PropsType) {
  const { item1Info, item2Info, voteInfo, selectedItemId } = props
  const { id: voteId, item1Votes, item2Votes } = voteInfo

  const [itemId, setItemId] = useState<number | null>(null)

  const handleSelectItem = useCallback(
    (selectItemId: number) => {
      if (itemId === selectItemId) {
        setItemId(null)
      } else {
        setItemId(selectItemId)
      }
    },
    [itemId, setItemId, selectedItemId],
  )

  /** 투표 참여 */
  const handleVote = async () => {
    if (!itemId) {
      alert('아이템을 투표해 주세요!')

      return
    }

    const status = await voteItem({ itemId, voteId })

    if (status === 200) {
      setItemId(null)
    }
  }

  /** 재투표(투표 취소) */
  const handleReVote = async () => {
    await reVote({ voteId })
  }

  return (
    <article className="mt-[12px] flex h-[567px] items-center rounded-[8px] border border-[#E6E6E6] px-[106px]">
      <div className="h-[464px] w-[514px]">
        <div className="flex h-[338px] justify-between">
          {/** item1 */}
          <VoteItem
            voteItemInfo={item1Info}
            itemId={itemId}
            onSelectItem={handleSelectItem}
          />
          <div className="mt-[16px] h-[262px] w-[0.77px] bg-[#DEDEDE]" />
          {/** item2 */}
          <VoteItem
            voteItemInfo={item2Info}
            itemId={itemId}
            onSelectItem={handleSelectItem}
          />
        </div>
        {/** 투표 게이지 */}
        {selectedItemId && (
          <ProgressBar item1Votes={item1Votes} item2Votes={item2Votes} />
        )}
        <div className="mt-[36px] flex justify-center">
          <button
            type="button"
            className={`${
              itemId ? 'bg-[#000]' : 'bg-[#757575]'
            } h-[48px] w-[136px] rounded-[100px] ${
              selectedItemId ? 'px-[22px]' : 'px-[40px]'
            } font-[600] text-[#fff]`}
            onClick={selectedItemId ? handleReVote : handleVote}
          >
            {selectedItemId ? '다시 투표하기' : '투표하기'}
          </button>
        </div>
      </div>
    </article>
  )
}
