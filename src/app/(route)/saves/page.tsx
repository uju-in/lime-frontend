'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Layout from '@/app/_components/layout/Layout'
import { SavePageMode } from '@/app/_types/save.type'
import AddFolderModal from './_component/AddFolderModal'
import { SaveItemList } from './[category]/_component'
import MoveFolderModal from './_component/MoveFolderModal'

function SaveFolderItem({
  folderName,
  disabled,
}: {
  folderName: string
  disabled: boolean
}) {
  return (
    <div
      className={`relative mr-5 flex h-[232px] w-[387px] ${disabled ? 'cursor-auto' : 'cursor-pointer'}`}
    >
      <div className="z-0 h-[232px] w-[240px] rounded-l-[8.83px] bg-[#BCBCBC]" />
      <div className="z-0">
        <div className="h-[116px] w-[147px] rounded-tr-[8.83px] bg-[#DBDBDB]" />
        <div className="h-[116px] w-[147px] rounded-br-[8.83px] bg-[#F5F5F5]" />
      </div>
      {disabled && (
        <div className="absolute left-0 top-0 z-20 h-full w-full bg-white opacity-80" />
      )}
      <div className="bg-gradient-folder absolute left-0 top-0 z-10 h-[193px] w-full rounded-t-[8.83px] pl-4 pt-4">
        <p className="text-[20px] font-[700] text-white drop-shadow-[0.774px_0.774px_2.012px_rgba(0,0,0,0.30)]">
          {folderName}
        </p>
      </div>
    </div>
  )
}

export default function SavesPage() {
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)
  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)

  const [isEditMode, setIsEditMode] = useState(false) // 목록 편집 모드

  const [checkedList, setCheckedList] = useState<number[]>([])

  return (
    <Layout>
      <section className="mx-auto h-full max-w-[1200px]">
        {/* Header */}
        {isEditMode ? (
          <div className="relative mb-[56px]">
            <h1 className="text-center text-[30px] font-bold">목록 편집</h1>
            <section className="absolute top-[50px] flex w-full items-center justify-between">
              <div className="text-[14px]">{`아이템 ${checkedList.length}개 선택됨`}</div>
              <button
                type="button"
                className="rounded-full bg-[#b1b1b1] p-[9px_19px] text-white"
              >
                모두 선택
              </button>
            </section>
          </div>
        ) : (
          <div className="mb-[56px] flex items-center justify-between">
            <h1 className="text-[30px] font-[700]">찜목록</h1>
            <div className="flex gap-[16px]">
              <button
                className="flex items-center justify-center gap-[5.25px] rounded-[97.6px] border-[0.5px] border-[#E2E2E2] bg-white p-[10px_17px_10px_10px]"
                type="button"
                onClick={() => setIsEditMode(true)}
              >
                <Image
                  className="ml-1 cursor-pointer"
                  width={20}
                  height={20}
                  src="/image/icon/icon-pencil.svg"
                  alt="plus"
                />
                <p>목록 편집</p>
              </button>
              <button
                className="flex items-center justify-center gap-[5.25px] rounded-[97.6px] bg-[#242424] p-[10px_17px_10px_10px]"
                type="button"
                onClick={() => setShowAddFolderModal(true)}
              >
                <Image
                  className="ml-1 cursor-pointer"
                  width={20}
                  height={20}
                  src="/image/icon/icon-white_plus.svg"
                  alt="plus"
                />
                <p className="text-[14px] font-[600] text-white">
                  폴더 추가하기
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Folder Items */}
        <div className="mb-[40px] grid grid-cols-[repeat(auto-fill,387px)] gap-[17px]">
          <SaveFolderItem folderName="농린이템" disabled={isEditMode} />
          <SaveFolderItem folderName="드로잉 준비물" disabled={isEditMode} />
          <SaveFolderItem folderName="배드민턴 라켓" disabled={isEditMode} />
        </div>

        {/* Single Items */}
        <SaveItemList
          mode={isEditMode ? SavePageMode.EDIT_LIST : SavePageMode.DEFAULT}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />

        {/* Footer */}
        {isEditMode && (
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
