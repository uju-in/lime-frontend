'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Modal from '@/app/_components/modal'
import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import renderToast from '@/app/_utils/toast'
import VoteItemList from './VoteItemList'
import { validateSelectedItem } from '../_utils/validation'

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
  const [showMobileItemList, setShowMobileItemList] = useState(false)
  const [currentFolderName, setCurrentFolderName] = useState('찜목록')

  const handleSelectItem = () => {
    if (validateSelectedItem(currentSelectedItem)) {
      onSelectItem(currentSelectedItem as CurrentFavoriteItemMetadata)
      setShowVoteModal(false)
    }
  }

  return (
    <dialog
      className="block h-full w-full"
      onClick={() => {
        setShowVoteModal(false)
      }}
    >
      <Modal
        isScrollActive={false}
        innerClassNames="mo:bottom-0 mo:top-[15%] mo:w-full mo:max-w-full mo:-translate-y-0"
      >
        <div className={cn('h-[592px] w-[852px]', 'mo:w-full')}>
          {/** PC Modal Header */}
          <div
            className={cn(
              'flex justify-between py-[20px] pl-[46px] pr-[18px]',
              'mo:hidden',
            )}
          >
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
          {/** Mobile Modal Header */}
          <div
            className={cn(
              'hidden h-[40px] items-center justify-center',
              'mo:flex',
            )}
          >
            <div className="h-0 w-[42px] rounded-[6px] border-[3px] bg-[#D2D2D2]" />
          </div>
          <div
            className={cn(
              'hidden h-[42px] items-center justify-center px-[16px] font-[600]',
              'mo:flex',
            )}
          >
            <button
              type="button"
              className="flex flex-1 justify-start"
              onClick={() => {
                setShowMobileItemList(false)
                setCurrentFolderName('찜목록')
              }}
            >
              <Image
                width={7}
                height={15}
                src="/image/icon/icon-arrow_left_black.svg"
                alt="close"
              />
            </button>
            <strong className="flex-none px-4 text-center">
              {currentFolderName}
            </strong>
            <div className="flex flex-1 justify-end">
              <button
                type="button"
                className={cn({
                  'text-black': currentSelectedItem,
                  'text-[#C3C3C3]': !currentSelectedItem,
                })}
                onClick={handleSelectItem}
              >
                선택완료
              </button>
            </div>
          </div>
          <article className={cn('px-[46px]', 'mo:px-0')}>
            <VoteItemList
              currentSelectedItem={currentSelectedItem}
              setCurrentSelectedItem={setCurrentSelectedItem}
              showMobileItemList={showMobileItemList}
              setShowMobileItemList={setShowMobileItemList}
              setCurrentFolderName={setCurrentFolderName}
            />
            {/** Go to ItemList */}
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
    </dialog>
  )
}
