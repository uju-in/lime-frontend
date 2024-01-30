'use client'

import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'

import CategorySelector from '@/app/_components/categorySelector'
import VoteModal from './VoteModal'

export default function VoteForm() {
  const [showVoteModal, setShowVoteModal] = useState(false)
  const [voteInfo, setVoteInfo] = useState({
    hobby: '',
    maximumParticipants: 0,
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

  return (
    <form>
      <p className="mt-[61px] text-[18px] font-[600]">
        투표 인원을 설정해 주세요
      </p>
      <div className="mt-[23.5px] flex gap-[16px]">
        <Image
          width={20}
          height={20}
          src="/image/icon/icon-circle_minus.svg"
          alt="minus button"
        />
        <p>hi</p>
        <Image
          width={20}
          height={20}
          src="/image/icon/icon-circle_plus.svg"
          alt="plus button"
        />
      </div>
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
          onClick={() => setShowVoteModal(true)}
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
      {/** 리뷰 작성 모달 */}
      {showVoteModal && <VoteModal setShowVoteModal={setShowVoteModal} />}
    </form>
  )
}
