'use client'

import React, { ChangeEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useAddVote from '@/app/_hook/api/votes/useAddVote'
import { VoteInfoType } from '@/app/_types/addVote.type'
import CategorySelector from '@/app/_components/categorySelector'
import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import VoteModal from './VoteModal'
import { truncateString } from '../../_utils/truncateString'

export default function VoteForm() {
  const router = useRouter()

  const [showVoteModal, setShowVoteModal] = useState(false)
  const [itemType, setItemType] = useState<string | null>(null)
  const [voteInfo, setVoteInfo] = useState<VoteInfoType>({
    hobby: '',
    maximumParticipants: 100,
    content: '',
    item1Id: null,
    item2Id: null,
  })

  /**
   * itemImageUrl1,2 - Selected Item Image URL
   * itemTitle1,2 - Selected Item Title
   */
  const [itemImageUrl1, setItemImageUrl1] = useState<string | null>(null)
  const [itemImageUrl2, setItemImageUrl2] = useState<string | null>(null)
  const [itemTitle1, setItemTitle1] = useState<string>('')
  const [itemTitle2, setItemTitle2] = useState<string>('')

  const { mutateAsync: addVote } = useAddVote()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setVoteInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleOpenModal = (type: 'item1' | 'item2') => {
    setItemType(type)
    setShowVoteModal(true)
  }

  const handleSelectItem = useCallback(
    (selectItem: CurrentFavoriteItemMetadata) => {
      const { itemId, imageUrl, originalName } = selectItem

      if (itemType === 'item1') {
        setVoteInfo((prevState) => ({
          ...prevState,
          item1Id: itemId,
        }))
        setItemImageUrl1(imageUrl)
        setItemTitle1(originalName)
      } else if (itemType === 'item2') {
        setVoteInfo((prevState) => ({
          ...prevState,
          item2Id: itemId,
        }))
        setItemImageUrl2(imageUrl)
        setItemTitle2(originalName)
      }
    },
    [itemType],
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const status = await addVote(voteInfo)

    if (status === 200) {
      router.push('/votes')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <div className="w-[88px]">
          <button
            type="button"
            className="mb-[4px] flex h-[88px] w-[88px] items-center justify-center rounded-[6.729px] bg-[#EAEAEA]"
            onClick={() => handleOpenModal('item1')}
          >
            <Image
              width={itemImageUrl1 ? 88 : 33}
              height={itemImageUrl1 ? 88 : 33}
              src={itemImageUrl1 || '/image/icon/icon-plus.svg'}
              alt="upload image"
            />
          </button>
          <span className="text-[12px] text-[#515151]">
            {truncateString(itemTitle1, 18)}
          </span>
        </div>
        <div className="h-[160px] w-[88px]">
          <button
            type="button"
            className="mb-[4px] flex h-[88px] w-[88px] items-center justify-center rounded-[6.729px] bg-[#EAEAEA]"
            onClick={() => handleOpenModal('item2')}
          >
            <Image
              width={itemImageUrl2 ? 88 : 33}
              height={itemImageUrl2 ? 88 : 33}
              src={itemImageUrl2 || '/image/icon/icon-plus.svg'}
              alt="upload image"
            />
          </button>
          <span className="text-[12px] text-[#515151]">
            {truncateString(itemTitle2, 18)}
          </span>
        </div>
      </div>
      <p className="mb-[20px] mt-[40px] text-[18px] font-[600]">
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
          selectItem={handleSelectItem}
        />
      )}
    </form>
  )
}
