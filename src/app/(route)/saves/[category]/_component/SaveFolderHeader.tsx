import React, { ReactNode, useRef, useState } from 'react'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import Image from 'next/image'
import { SavePageMode } from '@/app/_types/save.type'

const originFolderName = '농구' // TODO

function SaveFolderHeader({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

// Default 상태
function Default({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<SavePageMode>>
}) {
  const dropdownRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  /** 외부 클릭 시 dropdown 닫기 */
  useOutsideClick(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
    }
  })

  return (
    <>
      <h1 className="text-[38px] font-bold">{originFolderName}</h1>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => {
            setIsDropdownOpen((prev) => !prev)
          }}
        >
          <Image
            width={32}
            height={32}
            src={
              isDropdownOpen
                ? '/image/icon/icon-menu_active.svg'
                : '/image/icon/icon-menu.svg'
            }
            alt="menu"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 top-[40px] z-50 h-[157px] w-[173px] rounded-[8px] bg-white p-[13px_6px] shadow-[0px_0px_5.85px_2.25px_rgba(0,0,0,0.10)]">
            <div className="mb-[10px] pl-[7px] text-[12px]">폴더 옵션</div>
            <ul className="text-[14px] font-medium">
              <li
                onClick={() => {
                  setMode(SavePageMode.CHANGE_NAME)
                  setIsDropdownOpen(false)
                }}
                className="cursor-pointer rounded-[4px] p-[8px_7px] hover:bg-[#DFDFDF]"
              >
                이름 수정
              </li>
              <li
                onClick={() => {
                  setMode(SavePageMode.EDIT_LIST)
                  setIsDropdownOpen(false)
                }}
                className="cursor-pointer rounded-[4px] p-[8px_7px] hover:bg-[#DFDFDF]"
              >
                목록 편집
              </li>
              <li
                onClick={() => {
                  setIsDropdownOpen(false)
                  if (
                    window.confirm(
                      `'${originFolderName}' 폴더를 삭제하시겠습니까?`,
                    )
                  ) {
                    console.log('삭제')
                  }
                }}
                className="cursor-pointer rounded-[4px] p-[8px_7px] hover:bg-[#DFDFDF]"
              >
                폴더 삭제
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

// 폴더 이름 변경
function ChangeName({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<SavePageMode>>
}) {
  const [newFolderName, setNewFolderName] = useState('')

  return (
    <>
      <input
        placeholder={originFolderName}
        value={newFolderName}
        onChange={(e) => setNewFolderName(e.target.value)}
        className="text-center text-[38px] focus:outline-none"
      />
      <div className="absolute top-[62px] flex flex-col gap-[7px] text-[14px]">
        <button
          type="button"
          onClick={() => setMode(SavePageMode.DEFAULT)}
          className="w-[90px] rounded-full border-[0.5px] border-[#e2e2e2] bg-white py-[7.5px]"
        >
          수정 취소
        </button>
        <button
          type="button"
          disabled={newFolderName.length === 0}
          className={`w-[90px] rounded-full border-[0.5px] border-[#e2e2e2] py-[7.5px] text-white ${newFolderName.length > 0 ? 'bg-black' : 'bg-[#b1b1b1]'}`}
        >
          수정하기
        </button>
      </div>
    </>
  )
}

// 목록 편집
function EditList({ checkedList }: { checkedList: number[] }) {
  return (
    <div className="relative w-full">
      <h1 className="text-center text-[38px] font-bold">{originFolderName}</h1>
      <section className="absolute top-[100px] flex w-full items-center justify-between">
        <div className="text-[14px]">{`아이템 ${checkedList.length}개 선택됨`}</div>
        <button
          type="button"
          className="rounded-full bg-[#b1b1b1] p-[9px_19px] text-white"
        >
          모두 선택
        </button>
      </section>
    </div>
  )
}

SaveFolderHeader.Default = Default
SaveFolderHeader.ChangeName = ChangeName
SaveFolderHeader.EditList = EditList

export default SaveFolderHeader
