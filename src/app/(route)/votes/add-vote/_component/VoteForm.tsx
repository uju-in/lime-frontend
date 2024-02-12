'use client'

import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'

import CategorySelector from '@/app/_components/categorySelector'
import VoteModal from './VoteModal'

interface VoteInfoType {
  hobby: string
  maximumParticipants: number
  content: string
  item1Id: number | null
  item2Id: number | null
}

export default function VoteForm() {
  const [showVoteModal, setShowVoteModal] = useState(false)
  const [itemId, setItemId] = useState<string | null>(null)
  const [voteInfo, setVoteInfo] = useState<VoteInfoType>({
    hobby: '',
    maximumParticipants: 100,
    content: '',
    item1Id: null,
    item2Id: null,
  })

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setVoteInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleOpenModal = (type: 'item1' | 'item2') => {
    setItemId(type)
    setShowVoteModal(true)
  }

  const handleSelectItemId = (selectItemId: number) => {
    if (itemId === 'item1') {
      setVoteInfo((prevState) => ({ ...prevState, item1Id: selectItemId }))
    } else if (itemId === 'item2') {
      setVoteInfo((prevState) => ({ ...prevState, item2Id: selectItemId }))
    }
  }

  console.log(voteInfo.item1Id)
  console.log(voteInfo.item2Id)

  return (
    <form>
      <div className="mt-[61px] flex gap-[8px] text-[18px] font-[600]">
        <h1>투표 인원을 설정해 주세요</h1>
        <p className="text-[#A4A4A4]">(선택)</p>
      </div>
      <input
        name="maximumParticipants"
        className="mt-[20px] h-[48px] w-full border border-[#BDBDBD] py-[14px] pl-[12px]"
        placeholder="숫자만 입력해 주세요."
      />
      <p className="mt-[8px] text-[14px] font-[400] text-[#A4A4A4]">
        * 투표 인원은 최대 1000명까지 가능합니다.
      </p>
      <p className="mt-[4px] text-[14px] font-[400] text-[#A4A4A4]">
        * 입력하지 않을 시 기본 투표 인원은 100명입니다.
      </p>
      <p className="mt-[60px] text-[18px] font-[600]">
        투표할 취미를 선택해 주세요.
      </p>
      <CategorySelector
        setCategory={(hobby) => setVoteInfo({ ...voteInfo, hobby })}
      />
      <p className="mt-[60px] text-[18px] font-[600]">
        투표할 아이템을 두 개 선택해 주세요.
      </p>
      <div className="mt-[20px] flex gap-[16px]">
        <button
          type="button"
          className="flex h-[88px] w-[88px] items-center justify-center rounded-[6.729px] bg-[#EAEAEA]"
          onClick={() => handleOpenModal('item1')}
        >
          <Image
            width={36}
            height={36}
            src="/image/icon/icon-plus.svg"
            alt="upload image"
          />
        </button>
        <button
          type="button"
          className="flex h-[88px] w-[88px] items-center justify-center rounded-[6.729px] bg-[#EAEAEA]"
          onClick={() => handleOpenModal('item2')}
        >
          <Image
            width={36}
            height={36}
            src="/image/icon/icon-plus.svg"
            alt="upload image"
          />
        </button>
      </div>
      <p className="mb-[20px] mt-[60px] text-[18px] font-[600]">
        투표 내용을 작성해 주세요.
      </p>
      <textarea
        name="content"
        placeholder="최소 10자 이상 작성해 주세요."
        className="h-[140px] w-[720px] resize-none rounded-[4px] border border-[#DADADA] px-[12px] pt-[14px] outline-0"
        minLength={10}
        onChange={handleChange}
        required
      />
      <div className="flex h-[300px] items-center justify-center">
        <button
          type="submit"
          className="h-[48px] w-[300px] rounded-[4px] bg-[#000] font-[600] text-[#fff]"
        >
          생성하기
        </button>
      </div>
      {showVoteModal && (
        <VoteModal
          setShowVoteModal={setShowVoteModal}
          selectItemId={handleSelectItemId}
        />
      )}
    </form>
  )
}
