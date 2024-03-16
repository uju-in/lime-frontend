'use client'

import Modal from '@/app/_components/modal'
import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import FavoriteList from './FavoriteItemList'

interface PropsType {
  setShowVoteModal: React.Dispatch<React.SetStateAction<boolean>>
  selectItem: (selectItem: CurrentFavoriteItemMetadata) => void
}

export default function MoVoteModal(props: PropsType) {
  const { setShowVoteModal, selectItem: onSelectItem } = props

  return (
    <dialog
      className={cn('hidden h-full w-full', 'mo:block')}
      onClick={() => {
        setShowVoteModal(false)
      }}
    >
      <Modal>
        <div className="w-full px-[16px]">
          <div className="flex h-[40px] items-center justify-center">
            <div className="h-0 w-[42px] rounded-[6px] border-[3px] bg-[#D2D2D2]" />
          </div>
          <div className="flex h-[42px] items-center justify-center font-[600]">
            <button
              type="button"
              className="flex flex-1 justify-start"
              onClick={() => {
                setShowVoteModal(false)
              }}
            >
              <Image
                width={7}
                height={15}
                src="/image/icon/icon-arrow_left_black.svg"
                alt="close"
              />
            </button>
            <strong className="flex-none px-4 text-center">농린이템</strong>
            <div className="flex flex-1 justify-end">
              <button type="button" className="text-[#C3C3C3]">
                선택완료
              </button>
            </div>
          </div>
          <section className="bg-red-500" />
        </div>
      </Modal>
    </dialog>
  )
}
