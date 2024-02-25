import Modal from '@/app/_components/modal'
import useAddSaveFolder from '@/app/_hook/api/saves/useAddSaveFolder'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

interface Props {
  setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}

// 폴더 생성 모달
export default function AddFolderModal({ setShowAddFolderModal }: Props) {
  const [folderName, setFolderName] = useState('')
  const { mutateAsync: addFolder } = useAddSaveFolder()

  const handleAddFolder = useCallback(async () => {
    await addFolder(folderName)
    setShowAddFolderModal(false)
  }, [folderName, setShowAddFolderModal, addFolder])

  return (
    <Modal>
      <div className="relative p-[42px_44px]">
        <button
          type="button"
          className="absolute right-[14px] top-[14px]"
          onClick={() => setShowAddFolderModal(false)}
        >
          <Image
            width={24}
            height={24}
            src="/image/icon/icon-close.svg"
            alt="close"
          />
        </button>
        <div className="flex flex-col gap-[26px]">
          <h1 className="text-[24px]">새 폴더 만들기</h1>
          <div className="flex gap-[18px]">
            <input
              placeholder="폴더 이름"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              className="w-[365px] rounded-[3px] border border-[#DADADA] p-[10px_12px]"
            />
            <button
              type="button"
              className={cn('rounded-[100px] p-[13px_23px] text-white', {
                'bg-black': folderName.length > 0,
                'bg-[#B1B1B1]': folderName.length <= 0,
              })}
              onClick={handleAddFolder}
            >
              만들기
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
