import { SavePageMode } from '@/app/_types/save.type'
import Image from 'next/image'
import React from 'react'

/**
 * 찜 목록 페이지 Header
 */
export namespace SaveHeader {
  // 기본 상태 Header
  export function Default({
    setMode,
    setShowAddFolderModal,
  }: {
    setMode: React.Dispatch<React.SetStateAction<SavePageMode>>
    setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
  }) {
    return (
      <div className="mb-[56px] flex items-center justify-between">
        <h1 className="text-[30px] font-[700]">찜목록</h1>
        <div className="flex gap-[16px]">
          {/* <button
            className="flex items-center justify-center gap-[5.25px] rounded-[97.6px] border-[0.5px] border-[#E2E2E2] bg-white p-[10px_17px_10px_10px]"
            type="button"
            onClick={() => setMode(SavePageMode.EDIT_LIST)}
          >
            <Image
              className="ml-1 cursor-pointer"
              width={20}
              height={20}
              src="/image/icon/icon-pencil.svg"
              alt="plus"
            />
            <p>목록 편집</p>
          </button> */}
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
            <p className="text-[14px] font-[600] text-white">폴더 추가하기</p>
          </button>
        </div>
      </div>
    )
  }

  // 목록 편집 클릭 시 Header
  export function EditList({
    checkedList,
    handleAllSelect,
  }: {
    checkedList: number[]
    handleAllSelect: () => void
  }) {
    return (
      <div className="relative mb-[56px]">
        <h1 className="text-center text-[30px] font-bold">목록 편집</h1>
        <section className="absolute top-[50px] flex w-full items-center justify-between">
          <div className="text-[14px]">{`아이템 ${checkedList.length}개 선택됨`}</div>
          <button
            type="button"
            onClick={handleAllSelect}
            className="rounded-full bg-[#b1b1b1] p-[9px_19px] text-white"
          >
            모두 선택
          </button>
        </section>
      </div>
    )
  }
}
