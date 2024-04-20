'use Client'

import CategorySelector from '@/app/_components/categorySelector'
import { cn } from '@/app/_utils/twMerge'
import { SelectedItemType, VoteInfoType } from '@/app/_types/addVote.type'
import { ChangeEvent } from 'react'
import ItemSelector from './ItemSelector'

interface PropsType {
  handleChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleOpenModal: (type: 'item1' | 'item2') => void
  voteInfo: VoteInfoType
  setVoteInfo: (voteInfo: VoteInfoType) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  selectedItem: SelectedItemType
}

export default function VoteForm(props: PropsType) {
  const {
    handleChange,
    handleOpenModal,
    voteInfo,
    setVoteInfo,
    handleSubmit,
    selectedItem,
  } = props

  return (
    <form onSubmit={handleSubmit} className="mo:w-full">
      <div
        className={cn(
          'mt-[61px] flex gap-[8px] text-[18px] font-[600]',
          'mo:w-full',
        )}
      >
        <h1>투표 인원을 설정해 주세요</h1>
        <p className="text-[#A4A4A4]">(선택)</p>
      </div>
      <input
        name="maximumParticipants"
        className={cn(
          'mt-[20px] h-[48px] w-full border border-[#BDBDBD] py-[14px] pl-[12px]',
          'mo:w-full',
        )}
        placeholder="숫자만 입력해 주세요."
        onChange={handleChange}
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
      <div className="mt-[20px] flex h-[160px] gap-[16px] ">
        <ItemSelector
          onOpenModal={handleOpenModal}
          itemType="item1"
          itemImageUrl={selectedItem.imageUrl1 || ''}
          itemTitle={selectedItem.title1}
        />
        <ItemSelector
          onOpenModal={handleOpenModal}
          itemType="item2"
          itemImageUrl={selectedItem.imageUrl2 || ''}
          itemTitle={selectedItem.title2}
        />
      </div>
      <p className="mb-[20px] mt-[40px] text-[18px] font-[600]">
        투표 내용을 작성해 주세요.
      </p>
      <textarea
        name="content"
        placeholder="최소 10자 이상 작성해 주세요."
        className={cn(
          'h-[140px] w-[720px] resize-none rounded-[4px] border border-[#DADADA] px-[12px] pt-[14px] outline-0',
          'mo:w-full',
        )}
        minLength={10}
        onChange={handleChange}
        required
      />
      <div className="flex items-center justify-center py-[98px]">
        <button
          type="submit"
          className={cn(
            'h-[48px] w-[300px] rounded-[4px] bg-[#000] font-[600] text-[#fff]',
            'mo:w-full',
          )}
        >
          생성하기
        </button>
      </div>
    </form>
  )
}
