import Modal from '@/app/_components/modal'
import useMoveSaveItems, {
  MoveSaveItemsRequest,
} from '@/app/_hook/api/saves/useMoveSaveItems'
import useSaveList from '@/app/_hook/api/saves/useSavesList'
import { SaveFolderType } from '@/app/_types/save.type'
import renderToast from '@/app/_utils/toast'
import { cn } from '@/app/_utils/twMerge'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import MoAddFolderModal from './MoAddFolderModal'

interface Props {
  checkedList: number[]
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MoMoveFolderModal({
  checkedList,
  setShowModal,
}: Props) {
  const [selectFolderId, setSelectFolderId] = useState<number | null>(null)
  const { saveInfo, isLoading, isError } = useSaveList('folder')
  const { mutateAsync: moveItems } = useMoveSaveItems()

  const { folderId } = useParams()
  const currentFolderId = Number(folderId)

  const [showAddFolderModal, setShowAddFolderModal] = useState(false)

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
    setShowModal(false)
  }, [selectFolderId, checkedList, moveItems, setShowModal, currentFolderId])

  if (isLoading) return <div>...loading</div>
  if (isError) return null

  const folderList = saveInfo.favoriteInfos as SaveFolderType[]

  return (
    <>
      <Modal innerClassNames="fixed flex flex-col h-[90%] top-auto max-w-full w-full bottom-0 left-0 translate-x-0 translate-y-0">
        <div className="mx-auto my-[17px] h-[5px] w-[40px] rounded-full bg-[#d2d2d2]" />
        <h1 className="border-b py-[11.5px] text-center text-[16px] font-semibold">
          폴더 이동
        </h1>
        {/* 폴더 목록 */}
        <section className="flex-1 divide-y overflow-y-scroll rounded-l-[8px]">
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
        <div className="flex items-center justify-between p-[21px_23px]">
          <div
            onClick={() => {
              setShowAddFolderModal(true)
            }}
            className="flex cursor-pointer items-center gap-[25px] "
          >
            <Image
              src="/image/icon/icon-add_circle.svg"
              width={36}
              height={36}
              alt="add"
            />
            <span className="text-[16px] font-semibold">새 폴더</span>
          </div>
          <button
            type="button"
            disabled={!selectFolderId}
            onClick={handleMoveItems}
            className="rounded-full bg-black p-[10px_27px] text-white disabled:bg-[#b1b1b1]"
          >
            이동하기
          </button>
        </div>
      </Modal>
      {showAddFolderModal && (
        <MoAddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
      )}
    </>
  )
}
