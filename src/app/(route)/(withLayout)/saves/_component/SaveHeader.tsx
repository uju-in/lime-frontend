import Image from 'next/image'
import React from 'react'

/**
 * 찜 목록 페이지 Header
 */
export namespace SaveHeader {
  // 기본 상태 Header
  export function Default({
    setShowAddFolderModal,
  }: {
    setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
  }) {
    return (
      <div className="mb-[56px] flex items-center justify-between">
        <h1 className="text-[30px] font-[700]">찜목록</h1>
        <div className="flex gap-[16px]">
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
}
