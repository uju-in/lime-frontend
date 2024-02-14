'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { voteItem } from '@/app/_hook/api/useParticipationVote'

import { ItemInfoType, VoteInfoType } from '@/app/_types/detailVote.type'

import { truncateString } from '../../_utils/truncateString'

import DetailViewButton from './DetailViewButton'
import ProgressBar from './ProgressBar'

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

  const handleSelectItem = (selectItemId: number) => {
    if (itemId === selectItemId) {
      setItemId(null)
    } else {
      setItemId(selectItemId)
    }
  }

  const handleVoteItem = async () => {
    if (!itemId) {
      alert('아이템을 투표해 주세요!')

      return
    }

    const status = await voteItem({ itemId, voteId })

    if (status === 200) {
      setItemId(null)
    }
  }

  console.log(itemId)

  return (
    <article className="mt-[12px] flex h-[567px] items-center rounded-[8px] border border-[#E6E6E6] px-[106px]">
      <div className="h-[464px] w-[514px]">
        <div className="flex h-[338px] justify-between">
          {/** item1 */}
          <div
            className={`${
              item1Info.id === itemId && 'border-[3px] border-[#000]'
            } relative `}
            onClick={() => handleSelectItem(item1Info.id)}
          >
            <Image
              width={196}
              height={196}
              src={item1Info.image}
              alt="item1 image"
            />
            <div className="absolute bottom-[1px] h-[175px] w-[196px] rounded-[20px] bg-[#fff] px-[28px] pt-[15px] text-center">
              <p className="mb-[15.4px] h-[65px] text-center text-[14px] font-[500]">
                <strong>{truncateString(`${item1Info.name}`, 35)}</strong>
              </p>
              <strong className="text-[14px] font-[700]">
                {item1Info.price.toLocaleString()}원
              </strong>
              <div className="mt-[21.39px] flex justify-center">
                <DetailViewButton itemId={item1Info.id} />
              </div>
            </div>
          </div>
          <div className="mt-[16px] h-[262px] w-[0.77px] bg-[#DEDEDE]" />
          {/** item2 */}
          <div
            className={`${
              item2Info.id === itemId && 'border-[3px] border-[#000]'
            } relative `}
            onClick={() => handleSelectItem(item2Info.id)}
          >
            <Image
              width={196}
              height={196}
              src={item2Info.image}
              alt="item1 image"
              className="rounded-[8px]"
            />
            <div className="absolute bottom-[1px] h-[175px] w-[196px] rounded-[20px] bg-[#fff] px-[28px] pt-[15px] text-center">
              <p className="mb-[15.4px] h-[65px] text-center text-[14px] font-[500]">
                <strong>{truncateString(item2Info.name, 35)}</strong>
              </p>
              <strong className="text-[14px] font-[700]">
                {item2Info.price.toLocaleString()}원
              </strong>
              <div className="mt-[21.39px] flex justify-center">
                <DetailViewButton itemId={item1Info.id} />
              </div>
            </div>
          </div>
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
            } h-[48px] w-[136px] rounded-[100px] px-[20px] px-[40px] font-[600] text-[#fff]`}
            onClick={handleVoteItem}
          >
            {selectedItemId ? '투표하기' : '다시 투표하기'}
          </button>
        </div>
      </div>
    </article>
  )
}
