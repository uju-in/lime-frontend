'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Layout from '@/app/_components/layout/Layout'
import { SavePageMode } from '@/app/_types/save.type'
import AddFolderModal from './_component/AddFolderModal'
import { SaveItemList } from './[folderName]/_component'
import MoveFolderModal from './_component/MoveFolderModal'
import SaveFolderGroupItem from './_component/SaveFolderGroupItem'
import { SaveHeader } from './_component/SaveHeader'

export default function SavesPage() {
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)
  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)

  const [mode, setMode] = useState<SavePageMode>(SavePageMode.DEFAULT)

  const [checkedList, setCheckedList] = useState<number[]>([])

  return (
    <Layout>
      <section className="mx-auto h-full max-w-[1200px]">
        {/* Header */}
        {mode === SavePageMode.DEFAULT && (
          <SaveHeader.Default
            setMode={setMode}
            setShowAddFolderModal={setShowAddFolderModal}
          />
        )}
        {mode === SavePageMode.EDIT_LIST && (
          <SaveHeader.EditList checkedList={checkedList} />
        )}

        {/* Folder Items */}
        <div className="mb-[40px] grid grid-cols-[repeat(auto-fill,387px)] gap-[17px]">
          <SaveFolderGroupItem
            folderName="농린이템"
            disabled={mode === SavePageMode.EDIT_LIST}
          />
          <SaveFolderGroupItem
            folderName="드로잉 준비물"
            disabled={mode === SavePageMode.EDIT_LIST}
          />
          <SaveFolderGroupItem
            folderName="배드민턴 라켓"
            disabled={mode === SavePageMode.EDIT_LIST}
          />
        </div>

        {/* Single Items */}
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
      </section>

      {/* ------ 모달 ------ */}
      {showMoveFolderModal && (
        <MoveFolderModal
          setShowMoveFolderModal={setShowMoveFolderModal}
          setShowAddFolderModal={setShowAddFolderModal}
        />
      )}
      {showAddFolderModal && (
        <AddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
      )}
    </Layout>
  )
}
