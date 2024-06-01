'use client'

import { currentSelectedItemState } from '@/app/_atoms/currentSelectedItemState'
import ErrorFallback from '@/app/_components/errorFallback'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import Loading from '@/app/_components/loading'
import Modal from '@/app/_components/modal'
import Portal from '@/app/_components/potal'
import { useModals } from '@/app/_hook/common/useModal'
import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { validateSelectedItem } from '../_utils/validation'
import MoItemSelectHeader from './MoItemSelectHeader'
import VoteItemList from './VoteItemList'
import VoteModalHeader from './VoteModalHeader'

interface PropsType {
  onSelectItem: (
    selectItem: CurrentFavoriteItemMetadata,
    modalItemType: 'item1' | 'item2',
  ) => void
  itemType: 'item1' | 'item2'
}

export default function VoteModal({ onSelectItem, itemType }: PropsType) {
  const router = useRouter()

  const { close } = useModals()

  const [currentSelectedItem, setCurrentSelectedItem] = useRecoilState(
    currentSelectedItemState,
  )

  const [showMobileItemList, setShowMobileItemList] = useState(false)
  const [currentFolderName, setCurrentFolderName] = useState('찜목록')

  const handleSelectItem = () => {
    if (validateSelectedItem(currentSelectedItem)) {
      onSelectItem(currentSelectedItem as CurrentFavoriteItemMetadata, itemType)
      setCurrentSelectedItem(null)
      close()
    }
  }

  return (
    <Portal title="add-vote-modal">
      <div
        className="h-full w-full"
        onClick={() => {
          close()
        }}
      >
        <Modal
          isScrollActive={false}
          innerClassNames="mo:bottom-0 mo:top-[15%] mo:w-full mo:max-w-full mo:-translate-y-0"
        >
          <div className={cn('h-[592px] w-[852px]', 'mo:w-full')}>
            {/** PC Modal Header */}
            <VoteModalHeader />
            {/** Mobile Modal Header */}
            <MoItemSelectHeader
              setShowMobileItemList={setShowMobileItemList}
              setCurrentFolderName={setCurrentFolderName}
              currentSelectedItem={currentSelectedItem}
              currentFolderName={currentFolderName}
              handleSelectItem={handleSelectItem}
            />
            <article className={cn('px-[46px]', 'mo:px-0')}>
              <ErrorHandlingWrapper
                fallbackComponent={ErrorFallback}
                suspenseFallback={<Loading />}
              >
                <VoteItemList
                  showMobileItemList={showMobileItemList}
                  setShowMobileItemList={setShowMobileItemList}
                  setCurrentFolderName={setCurrentFolderName}
                />
              </ErrorHandlingWrapper>
              <div
                className={cn(
                  'mt-[43px] flex items-center justify-between',
                  'mo:hidden',
                )}
              >
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
                  <span className=" h-[27px] w-[152px] rounded-[4px] bg-[#000] px-[17px] py-[7px] text-[10px] font-[600] text-[#fff]">
                    취미에 맞는 아이템이 없다면?
                  </span>
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
      </div>
    </Portal>
  )
}
