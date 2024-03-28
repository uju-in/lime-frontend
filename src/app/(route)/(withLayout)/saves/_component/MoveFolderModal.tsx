import { saveModeState } from '@/app/_atoms/saveModeState'
import Modal from '@/app/_components/modal'
import useMoveSaveItems, {
  MoveSaveItemsRequest,
} from '@/app/_hook/api/saves/useMoveSaveItems'
import useSaveList from '@/app/_hook/api/saves/useSavesList'
import { SaveFolderType, SavePageMode } from '@/app/_types/save.type'
import renderToast from '@/app/_utils/toast'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'

interface Props {
  currentFolderId: number
  checkedList: number[]
  setShowMoveFolderModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}

// 폴더 이동 모달
export default function MoveFolderModal(props: Props) {
  const {
    currentFolderId,
    checkedList,
    setShowMoveFolderModal,
    setShowAddFolderModal,
  } = props
  const [selectFolderId, setSelectFolderId] = useState<number | null>(null)
  const { saveInfo, isLoading, isError } = useSaveList('folder')
  const { mutateAsync: moveItems } = useMoveSaveItems()
  const setMode = useSetRecoilState(saveModeState)

  const handleMoveItems = useCallback(async () => {
    if (!selectFolderId) return
    if (currentFolderId === selectFolderId) {
      renderToast({ type: 'error', message: '현재 위치한 폴더입니다.' })
      return
    }

    const req: MoveSaveItemsRequest = {
      favoriteItemIds: checkedList,
    }
    if (selectFolderId > 0) {
      req.folderId = selectFolderId
    }

    await moveItems(req)
    setShowMoveFolderModal(false)
    setMode(SavePageMode.DEFAULT)
  }, [
    selectFolderId,
    moveItems,
    checkedList,
    setShowMoveFolderModal,
    currentFolderId,
    setMode,
  ])

  if (isLoading) return <div>...loading</div>
  if (isError) return null

  const folderList = saveInfo.favoriteInfos as SaveFolderType[]

  return (
    <Modal innerClassNames="mo:fixed mo:flex mo:flex-col mo:h-[90%] mo:top-auto mo:max-w-full mo:w-full mo:bottom-0 mo:left-0 mo:translate-x-0 mo:translate-y-0">
      <div
        className={cn(
          'flex flex-col gap-[25px] p-[26px_46px]',
          'mo:h-full mo:gap-0 mo:p-0',
        )}
      >
        {/* <div className="hidden mo:block">
          <div className="mx-auto my-[17px] h-[5px] w-[40px] rounded-full bg-[#d2d2d2]" />
          <h1 className="border-b py-[11.5px] text-center text-[16px] font-semibold">
            폴더 이동
          </h1>
        </div> */}
        <div className="mo:border-b mo:p-[20px_18px]">
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
        </div>
        {/* 폴더 목록 */}
        <section
          className={cn(
            'h-[410px] w-[380px] divide-y overflow-y-scroll rounded-l-[8px] border border-[#DADADA]',
            'mo:h-auto mo:w-auto mo:flex-1 mo:border-0',
          )}
        >
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
        <section
          className={cn(
            'flex items-center justify-between',
            'mo:p-[21px_23px]',
          )}
        >
          <button
            type="button"
            className="flex cursor-pointer items-center gap-[10px]"
            onClick={() => setShowAddFolderModal(true)}
          >
            <Image
              src="/image/icon/icon-add_circle.svg"
              width={36}
              height={36}
              alt="add"
            />
            <span className="text-[16px] font-semibold">새 폴더</span>
          </button>
          <button
            type="button"
            disabled={!selectFolderId}
            onClick={handleMoveItems}
            className="rounded-full bg-black p-[10px_27px] text-white disabled:bg-[#b1b1b1]"
          >
            이동하기
          </button>
        </section>
      </div>
    </Modal>
  )
}
