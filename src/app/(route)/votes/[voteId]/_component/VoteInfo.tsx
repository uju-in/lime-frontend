'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { voteItem } from '@/app/_hook/api/useVoteItem'

import { ItemInfoType, VoteInfoType } from '@/app/_types/detailVote.type'

import DetailViewButton from './DetailViewButton'

interface PropsType {
  item1Info: ItemInfoType
  item2Info: ItemInfoType
  voteInfo: VoteInfoType
}

export default function VoteInfo(props: PropsType) {
  const { item1Info, item2Info, voteInfo } = props
  const { id: voteId, item1Votes, item2Votes } = voteInfo

  const [itemId, setItemId] = useState<number | null>(null)
  const [isSelectItem, setIsSelectItem] = useState<boolean>(false)

  const handleSelectItem = (selectItemId: number) => {
    setIsSelectItem(!isSelectItem)

    if (isSelectItem) {
      setItemId(selectItemId)
    } else {
      setItemId(null)
    }
  }

  const handleVoteItem = async () => {
    if (!itemId) {
      alert('아이템을 투표해 주세요!')

      return
    }

    const status = await voteItem({ itemId, voteId })

    if (status !== 'suceess') {
      alert(status)
    }
  }

  return (
    <article className="mt-[12px] flex h-[547px] items-center rounded-[8px] border border-[#E6E6E6] px-[106px]">
      <div className="h-[454px] w-[514px]">
        <div className="flex h-[338px] justify-between">
          {/** item1 */}
          <div
            className={`${
              item1Info.id === itemId ? 'border-[3px] border-[#000]' : ''
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
              <p className="mb-[15.4px] text-center text-[14px] font-[500]">
                <strong>{item1Info.name}</strong>
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
              item2Info.id === itemId ? 'border-[3px] border-[#000]' : ''
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
              <p className="mb-[15.4px] text-center text-[14px] font-[500]">
                <strong> {item2Info.name}</strong>
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
        <div className="font=[500] mt-[26px] flex h-[49px] items-center text-[22px] ">
          <div className="flex h-full w-[387px] items-center justify-center rounded-l-[8px] bg-[#000] text-[#fff]">
            {`${item1Votes}명`}
          </div>
          <div className="flex h-full w-[127px] items-center justify-center rounded-r-[8px] bg-[#EAEAEA]">
            {`${item2Votes}명`}
          </div>
        </div>
        <div className="mt-[36px] flex justify-center">
          <button
            type="button"
            className="h-[48px] w-[136px] rounded-[100px] bg-[#757575] px-[40px] font-[600] text-[#fff]"
            onClick={handleVoteItem}
          >
            투표하기
          </button>
        </div>
      </div>
    </article>
  )
}
