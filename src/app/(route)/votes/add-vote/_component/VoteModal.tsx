'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Modal from '@/app/_components/modal'

import { useSaveListData } from '@/app/_hook/api/useSaveListData'

import {
  CurrentFavoriteItemMetadata,
  SaveItemListType,
} from '@/app/_types/saveItem.type'

import FolderList from './FolderList'
import FavoriteList from './FavoriteItemList'

interface PropsType {
  setShowVoteModal: React.Dispatch<React.SetStateAction<boolean>>
  selectItem: (selectItem: CurrentFavoriteItemMetadata) => void
}

export default function VoteModal(props: PropsType) {
  const { setShowVoteModal, selectItem: onSelectItem } = props

  const router = useRouter()

  /** 아이템 선택 (미확정) */
  const [currentSelectedItem, setCurrentSelectedItem] =
    useState<CurrentFavoriteItemMetadata | null>(null)
  /** 폴더(id) 선택 */
  const [folderId, setFolderId] = useState<number | null>(null)

  const { data, isLoading, isError, isSuccess } = useSaveListData()

  const { favoriteInfos, totalCount } = (data as SaveItemListType) ?? {}

  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error !</div>

  const handleSelectItem = () => {
    if (!currentSelectedItem) {
      alert('아이템을 선택해 주세요.')

      return
    }

    onSelectItem(currentSelectedItem)
    setShowVoteModal(false)
  }

  console.log(favoriteInfos)

  if (isSuccess) {
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
            <div className="flex h-[410px] w-[760px] rounded-[8px] border  border-[#DADADA]">
              {/** 폴더 선택 */}
              <FolderList
                favoriteInfos={favoriteInfos}
                folderId={folderId}
                setFolderId={setFolderId}
              />
              {/** 아이템 선택 */}
              <div className="flex-1 overflow-y-auto pl-[16px]">
                {totalCount !== 0 ? (
                  <>
                    <p className="my-[13px] text-[12px]">{`아이템 ${totalCount}개`}</p>
                    <FavoriteList
                      favoriteInfos={favoriteInfos}
                      folderId={folderId}
                      currentSelectedItem={currentSelectedItem}
                      setCurrentSelectedItem={setCurrentSelectedItem}
                    />
                  </>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <strong className="mb-[12px] text-[20px] font-[600]">
                      찜한 아이템이 없어요
                    </strong>
                    <p className="text-[14px] font-[500]">
                      마음에 드는 아이템을 담아보세요
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/** 아이템 담으러가기 */}
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
                className="h-[40px] w-[110px] rounded-[100px] bg-[#000] px-[27px] text-center font-[600] text-[#fff]"
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
}
