import Modal from '@/app/_components/modal'
import useAddSaveFolder from '@/app/_hook/api/saves/mutations/useAddSaveFolder'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { validateSaveFolderName } from '../_utils/validation'

interface Props {
  setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}

// 폴더 생성 모달
export default function AddFolderModal({ setShowAddFolderModal }: Props) {
  const [folderName, setFolderName] = useState('')
  const { mutateAsync: addFolder } = useAddSaveFolder()

  const handleAddFolder = useCallback(async () => {
    if (!validateSaveFolderName(folderName)) return

    await addFolder(folderName)
    setShowAddFolderModal(false)
  }, [folderName, setShowAddFolderModal, addFolder])

  return (
    <Modal>
      <div
        className={cn(
          'relative flex flex-col gap-[26px] p-[42px_44px]',
          'mo:gap-[22px] mo:bg-[#F2F2F2] mo:px-0 mo:pb-0 mo:pt-[26px]',
        )}
      >
        <button
          type="button"
          className={cn('absolute right-[14px] top-[14px] block', 'mo:hidden')}
          onClick={() => setShowAddFolderModal(false)}
        >
          <Image
            width={24}
            height={24}
            src="/image/icon/icon-close.svg"
            alt="close"
          />
        </button>
        <h1
          className={cn(
            'text-[24px]',
            'mo:text-center mo:text-[14px] mo:font-semibold',
          )}
        >
          새 폴더 만들기
        </h1>
        <div className="flex gap-[18px]">
          <input
            placeholder="폴더 이름"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            className={cn(
              'w-[365px] rounded-[3px] border border-[#DADADA] p-[10px_12px]',
              'placeholder:text-[#737373]',
              'focus:outline-none',
              'mo:mx-[15px] mo:w-[240px] mo:rounded-[8px] mo:border-[0.5px] mo:border-[#8C8C8C] mo:p-[8px_7px] mo:text-[11px]',
            )}
          />
          <button
            type="button"
            className={cn(
              'block rounded-[100px] p-[13px_23px] text-white',
              {
                'bg-black': folderName.length > 0,
                'bg-[#B1B1B1]': folderName.length <= 0,
              },
              'mo:hidden',
            )}
            onClick={handleAddFolder}
          >
            만들기
          </button>
        </div>
        <div
          className={cn(
            'hidden w-full divide-x-[0.5px] divide-[#8C8C8C] border-t-[0.5px] border-[#8C8C8C] text-[18px] font-medium text-[#0045CC]',
            'mo:flex',
          )}
        >
          <button
            onClick={() => {
              setShowAddFolderModal(false)
            }}
            type="button"
            className="flex-1 py-[12px]"
          >
            취소
          </button>
          <button
            onClick={handleAddFolder}
            type="button"
            className="flex-1 py-[12px]"
          >
            확인
          </button>
        </div>
      </div>
    </Modal>
  )
}
