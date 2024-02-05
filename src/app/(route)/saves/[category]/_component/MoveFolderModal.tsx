import Modal from '@/app/_components/modal'
import Image from 'next/image'
import React from 'react'

interface Props {
  setShowMoveFolderModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}

// 폴더 이동 모달
export default function MoveFolderModal({
  setShowMoveFolderModal,
  setShowAddFolderModal,
}: Props) {
  return (
    <Modal>
      <div className="relative flex flex-col gap-[25px] p-[26px_46px]">
        {/* 닫기 버튼 */}
        <button
          className="absolute right-[20px]"
          type="button"
          onClick={() => {
            setShowMoveFolderModal(false)
          }}
        >
          <Image
            src="/image/icon/icon-close.svg"
            alt="close"
            width={24}
            height={24}
          />
        </button>

        {/* 타이틀 */}
        <h1 className="text-[24px] font-semibold">폴더 이동</h1>

        {/* 폴더 목록 */}
        <section className="h-[410px] w-[380px] divide-y overflow-y-scroll rounded-l-[8px] border border-[#DADADA]">
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="relative h-[52px] w-[52px] rounded-[4px] bg-[#434343]">
              <Image
                src="/image/icon/icon-check.svg"
                alt="check"
                className="absolute left-[10px] top-[10px]"
                width={32}
                height={32}
              />
            </div>
            <div>농린이템</div>
          </div>
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
            <div>드로잉 준비물</div>
          </div>
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
            <div>배드민턴 라켓</div>
          </div>
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
            <div>배드민턴 라켓</div>
          </div>
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
            <div>배드민턴 라켓</div>
          </div>
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
            <div>배드민턴 라켓</div>
          </div>
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
            <div>배드민턴 라켓</div>
          </div>
          <div className="flex items-center gap-[16px] p-[12px_18px]">
            <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
            <div>배드민턴 라켓</div>
          </div>
        </section>

        {/* 하단 버튼 */}
        <section className="flex justify-between">
          <button
            type="button"
            className="font-semibold"
            onClick={() => setShowAddFolderModal(true)}
          >
            + 새 폴더
          </button>
          <button
            type="button"
            disabled
            className="rounded-full bg-black p-[10px_27px] text-white disabled:bg-[#b1b1b1]"
          >
            이동하기
          </button>
        </section>
      </div>
    </Modal>
  )
}
