'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  SaveFolderType,
  SaveItemType,
  SavePageMode,
} from '@/app/_types/save.type'
import useDeleteSave from '@/app/_hook/api/saves/useDeleteSave'
import useSaveList from '@/app/_hook/api/saves/useSavesList'
import renderToast from '@/app/_utils/toast'

import { SaveHeader } from './SaveHeader'
import SaveList from './SaveList'
import MoveFolderModal from './MoveFolderModal'
import AddFolderModal from './AddFolderModal'

export default function SaveComponent() {
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)
  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)

  const [checkedList, setCheckedList] = useState<number[]>([])
  const [mode, setMode] = useState<SavePageMode>(SavePageMode.DEFAULT)

  const { mutateAsync: deleteItems } = useDeleteSave()

  const { saveInfo, isLoading, isError } = useSaveList('all')

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

  const folderList: SaveFolderType[] = saveInfo.favoriteInfos.filter(
    (item: SaveFolderType) => item.type === 'FOLDER',
  )

  const itemList: SaveItemType[] = saveInfo.favoriteInfos.filter(
    (item: SaveItemType) => item.type === 'ITEM',
  )

  /* 모두 선택 */
  const handleAllSelect = () => {
    setCheckedList(itemList.map((item: SaveItemType) => item.favoriteId))
  }

  return (
    <section className="mx-auto h-full max-w-[1200px]">
      {/* Header */}
      {mode === SavePageMode.DEFAULT && (
        <SaveHeader.Default
          setMode={setMode}
          setShowAddFolderModal={setShowAddFolderModal}
        />
      )}
      {mode === SavePageMode.EDIT_LIST && (
        <SaveHeader.EditList
          handleAllSelect={handleAllSelect}
          checkedList={checkedList}
        />
      )}
      <SaveList
        mode={mode}
        folderList={folderList}
        itemList={itemList}
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
      {/* ------ 모달 ------ */}
      {showMoveFolderModal && (
        <MoveFolderModal
          currentFolderId={-1}
          checkedList={checkedList}
          setShowMoveFolderModal={setShowMoveFolderModal}
          setShowAddFolderModal={setShowAddFolderModal}
        />
      )}
      {showAddFolderModal && (
        <AddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
      )}
    </section>
  )
}
