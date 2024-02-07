'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '@/app/_components/layout/Layout'
import { SavePageMode } from '@/app/_types/save.type'
import AddFolderModal from '../_component/AddFolderModal'
import SaveItemList from './_component/SaveItemList'
import MoveFolderModal from '../_component/MoveFolderModal'
import { SaveFolderHeader } from './_component'

export default function SavesDetailPage() {
  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)

  const [mode, setMode] = useState<SavePageMode>(SavePageMode.DEFAULT)
  const [checkedList, setCheckedList] = useState<number[]>([])

  return (
    <Layout>
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <section className="relative mb-[100px] flex items-center justify-center gap-[12px]">
          {mode === SavePageMode.DEFAULT && (
            <SaveFolderHeader.Default setMode={setMode} />
          )}
          {mode === SavePageMode.CHANGE_NAME && (
            <SaveFolderHeader.ChangeName setMode={setMode} />
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
            <button type="button">
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
        {showMoveFolderModal && (
          <MoveFolderModal
            setShowMoveFolderModal={setShowMoveFolderModal}
            setShowAddFolderModal={setShowAddFolderModal}
          />
        )}
        {showAddFolderModal && (
          <AddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
        )}
      </div>
    </Layout>
  )
}
