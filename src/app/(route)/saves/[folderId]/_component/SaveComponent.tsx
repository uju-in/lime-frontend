'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { SavePageMode } from '@/app/_types/save.type'
import useDeleteSave from '@/app/_hook/api/saves/useDeleteSave'

import { SaveFolderHeader, SaveItemList } from '.'

interface Props {
  folderId: number
  setShowMoveFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SaveComponent({
  folderId,
  setShowMoveFolderModal,
}: Props) {
  const [mode, setMode] = useState<SavePageMode>(SavePageMode.DEFAULT)
  const [checkedList, setCheckedList] = useState<number[]>([])

  const { mutateAsync: deleteItems } = useDeleteSave()

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

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Header */}
      <section className="relative mb-[100px] flex items-center justify-center gap-[12px]">
        {mode === SavePageMode.DEFAULT && (
          <SaveFolderHeader.Default setMode={setMode} folderId={folderId} />
        )}
        {mode === SavePageMode.CHANGE_NAME && (
          <SaveFolderHeader.ChangeName setMode={setMode} folderId={folderId} />
        )}
        {mode === SavePageMode.EDIT_LIST && (
          <SaveFolderHeader.EditList checkedList={checkedList} />
        )}
      </section>

      {/* Contents */}
      <SaveItemList
        mode={mode}
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
