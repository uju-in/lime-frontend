import useScrollDirection from '@/app/_hook/common/useScrollDirection'
import { LocalStorage } from '@/app/_utils/localStorage'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useCallback, useRef, useState } from 'react'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'
import MoDeleteFolderModal from '@/app/(route)/(withLayout)/saves/_component/MoDeleteFolderModal'
import MoChangeFolderNameModal from '@/app/(route)/(withLayout)/saves/_component/MoChangeFolderNameModal'
import { useSetRecoilState } from 'recoil'
import { saveModeState } from '@/app/_atoms/saveModeState'
import { SavePageMode } from '@/app/_types/save.type'
import AddFolderModal from '@/app/(route)/(withLayout)/saves/_component/AddFolderModal'

export namespace MoHeader {
  export function Main({ title }: { title: string }) {
    const scrollDirection = useScrollDirection()

    return (
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-10 hidden h-[56px] items-center justify-between bg-white p-[16px] text-[18px] font-[700]',
          'mo:flex',
          {
            'mo:hidden': scrollDirection === 'down',
            'mo:flex': scrollDirection === 'up',
          },
        )}
      >
        <Link href="/">
          <strong>{title}</strong>
        </Link>
        <Link href="/mo-search">
          <Image
            src="/image/icon/icon-search_black.svg"
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </Link>
      </header>
    )
  }

  export function Back({ title }: { title: string }) {
    const router = useRouter()
    const scrollDirection = useScrollDirection()

    return (
      <header
        className={cn(
          'fixed left-0 right-0 top-0 hidden items-center justify-between bg-white py-[10px]',
          'mo:flex',
          {
            'mo:hidden': scrollDirection === 'down',
            'mo:flex': scrollDirection === 'up',
          },
        )}
      >
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/image/icon/icon-back.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </button>
        <h1 className="text-[16px] font-semibold">{title}</h1>
        <div className="w-[24px]" />
      </header>
    )
  }

  export function Search({
    inputKeyword,
    setInputKeyword,
  }: {
    inputKeyword: string
    setInputKeyword: React.Dispatch<React.SetStateAction<string>>
  }) {
    const router = useRouter()
    const scrollDirection = useScrollDirection()

    const handleSearch = useCallback(() => {
      router.push(`/search?keyword=${inputKeyword}`)

      if (inputKeyword.length === 0) return

      LocalStorage.search().add(inputKeyword)
    }, [inputKeyword, router])

    return (
      <header
        className={cn('flex items-center gap-[19px] px-[8px] py-[10px]', {
          'mo:hidden': scrollDirection === 'down',
          'mo:flex': scrollDirection === 'up',
        })}
      >
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/image/icon/icon-back.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </button>
        <input
          className="w-full rounded-full bg-black p-[10px_50px_10px_15px] text-[12px] text-[#DFDFDF] placeholder:text-[#DFDFDF] focus:outline-none"
          placeholder="찾고 싶은 아이템을 검색해보세요!"
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return
            if (e.key === 'Enter') handleSearch()
          }}
        />
        <button
          className="absolute right-[26px] top-[16px]"
          type="button"
          onClick={handleSearch}
        >
          <Image
            src="/image/icon/icon-search_dfdfdf.svg"
            alt="search"
            width={24}
            height={24}
          />
        </button>
      </header>
    )
  }

  export function Save({ title }: { title: string }) {
    const router = useRouter()
    const scrollDirection = useScrollDirection()
    const [showDropDown, setShowDropDown] = useState(false)
    const [showAddFolderModal, setShowAddFolderModal] = useState(false)
    const [showFolderDeleteModal, setShowFolderDeleteModal] = useState(false)
    const [showChangeFolderNameModal, setShowChangeFolderNameModal] =
      useState(false)

    const setMode = useSetRecoilState(saveModeState)

    const dropdownRef = useRef(null)

    const isDetailPage = title.length > 0 // 찜 폴더 상세 페이지인지 여부 (/saves/[folderId]?name=)

    useOutsideClick(dropdownRef, () => {
      if (showDropDown) {
        setShowDropDown(false)
      }
    })

    return (
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 hidden items-center justify-between bg-white px-[10px] py-[10px]',
          'mo:flex',
          {
            'mo:hidden': scrollDirection === 'down',
            'mo:flex': scrollDirection === 'up',
          },
        )}
      >
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/image/icon/icon-back.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </button>
        <h1 className="text-[16px] font-semibold">
          {isDetailPage ? title : '찜목록'}
        </h1>
        <button
          type="button"
          onClick={() => {
            if (isDetailPage) {
              setShowDropDown(true)
            } else {
              setShowAddFolderModal(true)
            }
          }}
        >
          <Image
            src={
              isDetailPage
                ? '/image/icon/icon-save_menu.svg'
                : '/image/icon/icon-plus_242424.svg'
            }
            width={24}
            height={24}
            alt="icon"
          />
        </button>
        {showDropDown && (
          <ul
            ref={dropdownRef}
            className="absolute right-[10px] top-10 flex w-[160px] flex-col divide-y-[0.5px] divide-[#8C8C8C] rounded-[12px] bg-[#F2F2F2] text-[14px] font-medium"
          >
            <li
              onClick={() => {
                setShowDropDown(false)
                setShowChangeFolderNameModal(true)
              }}
              className="cursor-pointer rounded-t-[12px] p-[11px_17px] hover:bg-[#ddd]"
            >
              이름 수정
            </li>
            <li
              onClick={() => {
                setShowDropDown(false)
                setMode(SavePageMode.EDIT_LIST)
              }}
              className="cursor-pointer p-[11px_17px] hover:bg-[#ddd]"
            >
              목록 편집
            </li>
            <li
              onClick={() => {
                setShowDropDown(false)
                setShowFolderDeleteModal(true)
              }}
              className="cursor-pointer rounded-b-[12px] p-[11px_17px] text-[#f00] hover:bg-[#ddd]"
            >
              폴더 삭제
            </li>
          </ul>
        )}
        {/* ----- Modal ----- */}
        {showAddFolderModal && (
          <AddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
        )}
        {showFolderDeleteModal && (
          <MoDeleteFolderModal setShowModal={setShowFolderDeleteModal} />
        )}
        {showChangeFolderNameModal && (
          <MoChangeFolderNameModal
            originFolderName={title}
            setShowModal={setShowChangeFolderNameModal}
          />
        )}
      </header>
    )
  }
}
