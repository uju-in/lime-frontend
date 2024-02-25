'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Modal from '@/app/_components/modal'
import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import VoteItemList from './VoteItemList'

interface PropsType {
  setShowVoteModal: React.Dispatch<React.SetStateAction<boolean>>
  selectItem: (selectItem: CurrentFavoriteItemMetadata) => void
}

export default function VoteModal(props: PropsType) {
  const { setShowVoteModal, selectItem: onSelectItem } = props

  const router = useRouter()

  /** Select item (not confirmed) */
  const [currentSelectedItem, setCurrentSelectedItem] =
    useState<CurrentFavoriteItemMetadata | null>(null)

  const handleSelectItem = () => {
    if (!currentSelectedItem) {
      alert('아이템을 선택해 주세요.')

      return
    }

    onSelectItem(currentSelectedItem)
    setShowVoteModal(false)
  }

  return (
    <Modal isScrollActive={false}>
      <div className="h-[592px] w-[852px]">
        <div className="flex justify-between py-[20px] pl-[46px] pr-[18px]">
          <strong className="text-[24px] font-[600]">찜목록</strong>
          <button
            type="button"
            aria-label="close"
            onClick={() => {
              setShowVoteModal(false)
            }}
          >
            <Image
              width={24}
              height={24}
              src="/image/icon/icon-close.svg"
              alt="close"
            />
          </button>
        </div>
        <article className="px-[46px]">
          <VoteItemList
            currentSelectedItem={currentSelectedItem}
            setCurrentSelectedItem={setCurrentSelectedItem}
          />
          {/** Go to ItemList */}
          <div className="mt-[43px] flex items-center justify-between">
            <button
              type="button"
              className="flex items-center"
              onClick={() => router.push('/items')}
            >
              <Image
                width={15}
                height={15}
                src="/image/icon/icon-plus.svg"
                alt="plus item"
              />
              <span className="relative ml-[6px] font-[600]">
                아이템 담으러 가기
              </span>
            </button>
            <div className="absolute bottom-[60px] left-[45px] flex flex-col items-center">
              <div className=" h-[27px] w-[152px] rounded-[4px] bg-[#000] px-[17px] py-[7px] text-[10px] font-[600] text-[#fff]">
                취미에 맞는 아이템이 없다면?
              </div>
              <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-black" />
            </div>
            <button
              type="button"
              className="h-[40px] w-[110px] rounded-[100px] bg-black px-[27px] text-center font-[600] text-[#fff]"
              onClick={handleSelectItem}
            >
              선택완료
            </button>
          </div>
        </article>
      </div>
    </Modal>
  )
}
