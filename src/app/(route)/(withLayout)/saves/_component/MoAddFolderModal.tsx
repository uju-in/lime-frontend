import React, { useCallback, useState } from 'react'
import Modal from '@/app/_components/modal'
import { cn } from '@/app/_utils/twMerge'
import useAddSaveFolder from '@/app/_hook/api/saves/useAddSaveFolder'
import renderToast from '@/app/_utils/toast'

export default function MoAddFolderModal({
  setShowAddFolderModal,
}: {
  setShowAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [folderName, setFolderName] = useState('')
  const { mutateAsync: addFolder } = useAddSaveFolder()

  const handleAddFolder = useCallback(async () => {
    if (!folderName) {
      renderToast({ type: 'error', message: '폴더 이름을 입력해주세요.' })
      return
    }
    await addFolder(folderName)
    setShowAddFolderModal(false)
  }, [folderName, setShowAddFolderModal, addFolder])

  return (
    <Modal>
      <div className="flex flex-col items-center gap-[22px] bg-[#F2F2F2] pt-[26px]">
        <h1 className="text-[14px] font-semibold">새 폴더 만들기</h1>
        <input
          value={folderName}
          onChange={(e) => {
            setFolderName(e.target.value)
          }}
          placeholder="폴더 이름"
          className={cn(
            'mx-[15px] w-[240px] rounded-[8px] border-[0.5px] border-[#8C8C8C] p-[8px_7px] text-[11px]',
            'placeholder:text-[#737373]',
            'focus:outline-none',
          )}
        />
        <div className="flex w-full divide-x-[0.5px] divide-[#8C8C8C] border-t-[0.5px] border-[#8C8C8C] text-[18px] font-medium text-[#0045CC]">
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
