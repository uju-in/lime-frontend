'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Layout from '@/app/_components/layout/Layout'
import RQProvider from '@/app/_components/RQProvider'
import { SavePageMode } from '@/app/_types/save.type'
import AddFolderModal from './_component/AddFolderModal'
import MoveFolderModal from './_component/MoveFolderModal'
import { SaveHeader } from './_component/SaveHeader'
import SaveList from './_component/SaveList'

export default function SavesPage() {
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)
  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)

  const [mode, setMode] = useState<SavePageMode>(SavePageMode.DEFAULT)
  const [checkedList, setCheckedList] = useState<number[]>([])

  useEffect(() => {
    if (mode !== SavePageMode.EDIT_LIST) setCheckedList([])
  }, [mode])

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

        <RQProvider>
          <SaveList
            mode={mode}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </RQProvider>

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
