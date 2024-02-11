'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Modal from '@/app/_components/modal'

import { useSaveListData } from '@/app/_hook/api/useSaveListData'

import { SaveItemType } from '@/app/_types/saveItem.type'

import ItemCard from './ItemCard'

interface PropsType {
  setShowVoteModal: React.Dispatch<React.SetStateAction<boolean>>
  selectItemId: (selectItemId: number) => void
}

export default function VoteModal(props: PropsType) {
  const { setShowVoteModal, selectItemId: onSelectItemId } = props

  const router = useRouter()

  const [isSelectItem, setIsSelectItem] = useState<boolean>(false)
  const [currentSelectItem, setCurrentIsSelectItem] = useState<number | null>(
    null,
  )
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const { data, isLoading, isError } = useSaveListData()

  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error !</div>

  const { totalCount, favoriteInfos } = data ?? {}

  /** 폴더 목록 저장 */
  const folderList = data?.favoriteInfos.filter(
    (item) => item.type === 'FOLDER',
  )

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
            {/** folder choice */}
            <div className="flex-1 overflow-y-scroll">
              {folderList?.map((folder) => (
                <button
                  key={folder.favoriteId}
                  type="button"
                  className="flex w-full items-center border border-x-0 border-t-0 border-b-[#D2D2D2] py-[12px] pl-[18px]"
                >
                  <Image
                    width={52}
                    height={52}
                    src="/image/icon/icon-close.svg"
                    alt="folder image"
                    className="rounded-[4px]"
                  />
                  <strong className="font=[500] ml-[16px]">농린이템</strong>
                </button>
              ))}
            </div>
            {/** 아이템 선택 */}
            <div className="flex-1 overflow-y-auto pl-[16px]">
              {totalCount !== 0 ? (
                <>
                  <p className="my-[13px] text-[12px]">{`아이템 ${totalCount}개`}</p>
                  <div className="grid grid-cols-3 gap-x-[12px] gap-y-[20px]">
                    {favoriteInfos
                      ?.filter((item) => item.type === 'ITEM')
                      .map((item) => (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <div
                          key={item.favoriteId}
                          className={`${
                            isSelected ? 'bg-#868686' : 'bg-[#fff]'
                          }`}
                          onClick={() => setIsSelected(!isSelectItem)}
                        >
                          <ItemCard
                            itemInfo={item}
                            setCurrentIsSelectItem={setCurrentIsSelectItem}
                          />
                        </div>
                      ))}
                  </div>
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
            {/** 아이템 담으러가기 상단 안내 팝업 메시지 */}
            <div className="absolute bottom-[60px] left-[45px] flex flex-col items-center">
              <div className=" h-[27px] w-[152px] rounded-[4px] bg-[#000] px-[17px] py-[7px] text-[10px] font-[600] text-[#fff]">
                취미에 맞는 아이템이 없다면?
              </div>
              <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-black" />
            </div>
            <button
              type="button"
              className="h-[40px] w-[110px] rounded-[100px] bg-[#000] px-[27px] text-center font-[600] text-[#fff]"
            >
              선택완료
            </button>
          </div>
        </article>
      </div>
    </Modal>
  )
}
