'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { SavePageMode } from '@/app/_types/save.type'
import useDeleteSave from '@/app/_hook/api/saves/useDeleteSave'
import useSaveList from '@/app/_hook/api/saves/useSavesList'

import { SaveFolderHeader, SaveItemList } from '.'

interface Props {
  folderId: number
  folderName: string
  setShowMoveFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SaveFolderComponent(props: Props) {
  const { folderId, folderName, setShowMoveFolderModal } = props
  const [mode, setMode] = useState<SavePageMode>(SavePageMode.DEFAULT)
  const [checkedList, setCheckedList] = useState<number[]>([])

  const { mutateAsync: deleteItems } = useDeleteSave()

  useEffect(() => {
    if (mode !== SavePageMode.EDIT_LIST) setCheckedList([])
  }, [mode, setCheckedList])

  /* 아이템 삭제 */
  const handleDeleteItems = useCallback(() => {
    if (checkedList.length === 0) {
      window.alert('삭제할 아이템을 선택해주세요.')
      return
    }
    if (window.confirm('삭제하시겠습니까?')) {
      const req = { favoriteItemIds: checkedList, folderIds: [] }
      deleteItems(req)
    }
  }, [checkedList, deleteItems])

  const { saveInfo, isLoading, isError } = useSaveList('item', folderId)

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
          <button type="button" onClick={() => setShowMoveFolderModal(true)}>
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
          <button type="button" onClick={() => setMode(SavePageMode.DEFAULT)}>
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
    </div>
  )
}
