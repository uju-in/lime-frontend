'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { SaveItemType, SavePageMode } from '@/app/_types/save.type'
import useDeleteSave from '@/app/_hook/api/saves/useDeleteSave'
import useSaveList from '@/app/_hook/api/saves/useSavesList'
import renderToast from '@/app/_utils/toast'

import { SaveFolderHeader, SaveItemList } from '.'
import MoveFolderModal from '../../_component/MoveFolderModal'
import AddFolderModal from '../../_component/AddFolderModal'

interface Props {
  folderId: number
  folderName: string
}

export default function SaveFolderComponent(props: Props) {
  const { folderId, folderName } = props
  const [mode, setMode] = useState<SavePageMode>(SavePageMode.DEFAULT)
  const [checkedList, setCheckedList] = useState<number[]>([])

  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)

  const { mutateAsync: deleteItems } = useDeleteSave()

  const { saveInfo, isLoading, isError } = useSaveList('item', folderId)

  /* 모두 선택 */
  const handleAllSelect = () => {
    const itemList = saveInfo.favoriteInfos as SaveItemType[]
    setCheckedList(itemList.map((item) => item.favoriteId))
  }

  /* 아이템 삭제 */
  const handleDeleteItems = useCallback(() => {
    if (checkedList.length === 0) {
      renderToast({ type: 'error', message: '삭제할 아이템을 선택해주세요.' })
      return
    }
    if (window.confirm('삭제하시겠습니까?')) {
      const req = { favoriteItemIds: checkedList, folderIds: [] }
      deleteItems(req)
    }
  }, [checkedList, deleteItems])

  /* 아이템 이동 */
  const handleModeItems = useCallback(() => {
    if (checkedList.length === 0) {
      renderToast({ type: 'error', message: '이동할 아이템을 선택해주세요.' })
      return
    }
    setShowMoveFolderModal(true)
  }, [checkedList, setShowMoveFolderModal])

  if (isLoading) return <div>...loading</div>
  if (isError) return null

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Header */}
      <section className="relative mb-[100px] flex items-center justify-center gap-[12px]">
        {mode === SavePageMode.DEFAULT && (
          <SaveFolderHeader.Default
            setMode={setMode}
            folderId={folderId}
            originFolderName={folderName}
          />
        )}
        {mode === SavePageMode.CHANGE_NAME && (
          <SaveFolderHeader.ChangeName
            setMode={setMode}
            folderId={folderId}
            originFolderName={folderName}
          />
        )}
        {mode === SavePageMode.EDIT_LIST && (
          <SaveFolderHeader.EditList
            handleAllSelect={handleAllSelect}
            checkedList={checkedList}
            originFolderName={folderName}
          />
        )}
      </section>

      {/* Contents */}
      <SaveItemList
        mode={mode}
        itemList={saveInfo.favoriteInfos}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />

      {/* Footer */}
      {mode === SavePageMode.EDIT_LIST && (
        <section className="flex justify-center gap-6 py-[30px]">
          <button type="button" onClick={handleModeItems}>
            <Image
              className="rounded-full bg-white p-[14px] shadow-[0px_0px_4.758px_rgba(0,0,0,0.10)]"
              width={61}
              height={61}
              src="/image/icon/icon-folder.svg"
              alt="folder"
            />
          </button>
          <button type="button" onClick={handleDeleteItems}>
            <Image
              className="rounded-full bg-white p-[14px] shadow-[0px_0px_4.758px_rgba(0,0,0,0.10)]"
              width={61}
              height={61}
              src="/image/icon/icon-bin.svg"
              alt="bin"
            />
          </button>
          <button
            type="button"
            onClick={() => {
              setMode(SavePageMode.DEFAULT)
              setCheckedList([])
            }}
          >
            <Image
              className="rounded-full bg-white p-[14px] shadow-[0px_0px_4.758px_rgba(0,0,0,0.10)]"
              width={61}
              height={61}
              src="/image/icon/icon-cancel.svg"
              alt="cancel"
            />
          </button>
        </section>
      )}
      {/* // ----- 모달 ----- // */}
      {showMoveFolderModal && (
        <MoveFolderModal
          currentFolderId={folderId}
          checkedList={checkedList}
          setShowMoveFolderModal={setShowMoveFolderModal}
          setShowAddFolderModal={setShowAddFolderModal}
        />
      )}
      {showAddFolderModal && (
        <AddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
      )}
    </div>
  )
}
