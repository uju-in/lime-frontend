import Modal from '@/app/_components/modal'
import useSaveList from '@/app/_hook/api/saves/useSavesList'
import { SaveFolderType } from '@/app/_types/save.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  setShowMoveFolderModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}

// 폴더 이동 모달
export default function MoveFolderModal({
  setShowMoveFolderModal,
  setShowAddFolderModal,
}: Props) {
  const [selectFolderId, setSelectFolderId] = useState<number | null>(null)
  const { saveInfo, isLoading, isError } = useSaveList('folder')
  if (isLoading) return <div>...loading</div>
  if (isError) return null

  const folderList = saveInfo.favoriteInfos as SaveFolderType[]

  return (
    <Modal>
      <div className="relative flex flex-col gap-[25px] p-[26px_46px]">
        {/* 닫기 버튼 */}
        <button
          className="absolute right-[20px]"
          type="button"
          onClick={() => {
            setShowMoveFolderModal(false)
          }}
        >
          <Image
            src="/image/icon/icon-close.svg"
            alt="close"
            width={24}
            height={24}
          />
        </button>

        {/* 타이틀 */}
        <h1 className="text-[24px] font-semibold">폴더 이동</h1>

        {/* 폴더 목록 */}
        <section className="h-[410px] w-[380px] divide-y overflow-y-scroll rounded-l-[8px] border border-[#DADADA]">
          {folderList.map((item) => {
            const { favoriteId, originalName, metadata } = item
            const { imageUrls } = metadata.folderMetadata
            return (
              <div
                key={favoriteId}
                onClick={() => {
                  if (selectFolderId === favoriteId) setSelectFolderId(null)
                  else setSelectFolderId(favoriteId)
                }}
                className={cn(
                  'flex cursor-pointer items-center gap-[16px] p-[12px_18px]',
                  {
                    'bg-[#F1F1F1]': selectFolderId === favoriteId,
                    'bg-white': selectFolderId !== favoriteId,
                  },
                )}
              >
                <div
                  style={{
                    backgroundImage:
                      imageUrls.length > 0 ? `url('${imageUrls[0]}')` : '',
                  }}
                  className="h-[52px] w-[52px] rounded-[4px] bg-[#dadada] bg-contain bg-center bg-no-repeat"
                />
                <div>{originalName}</div>
              </div>
            )
          })}
        </section>

        {/* 하단 버튼 */}
        <section className="flex justify-between">
          <button
            type="button"
            className="font-semibold"
            onClick={() => setShowAddFolderModal(true)}
          >
            + 새 폴더
          </button>
          <button
            type="button"
            disabled={!selectFolderId}
            className="rounded-full bg-black p-[10px_27px] text-white disabled:bg-[#b1b1b1]"
          >
            이동하기
          </button>
        </section>
      </div>
    </Modal>
  )
}
