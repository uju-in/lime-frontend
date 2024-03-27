import React, { useCallback, useState } from 'react'
import Modal from '@/app/_components/modal'
import { cn } from '@/app/_utils/twMerge'
import renderToast from '@/app/_utils/toast'
import { useChangeSaveFolderName } from '@/app/_hook/api/saves/useChangeSaveFolderName'
import { useParams, useRouter } from 'next/navigation'

interface Props {
  originFolderName: string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MoChangeFolderNameModal(props: Props) {
  const { originFolderName, setShowModal } = props
  const [newFolderName, setNewFolderName] = useState('')
  const { mutateAsync: changeName } = useChangeSaveFolderName()

  const { folderId } = useParams()
  const fId = Number(folderId)

  const router = useRouter()

  const handleChangeName = useCallback(async () => {
    if (!newFolderName) {
      renderToast({ type: 'error', message: '폴더 이름을 입력해주세요.' })
      return
    }

    await changeName({ folderId: fId, folderName: newFolderName })
    router.replace(`/saves/${fId}?name=${newFolderName}`)

    setShowModal(false)
  }, [newFolderName, changeName, setShowModal, fId, router])

  return (
    <Modal>
      <div className="flex flex-col items-center gap-[22px] bg-[#F2F2F2] pt-[26px]">
        <h1 className="text-[14px] font-semibold">폴더 이름 수정</h1>
        <input
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder={originFolderName}
          className={cn(
            'mx-[15px] w-[240px] rounded-[8px] border-[0.5px] border-[#8C8C8C] p-[8px_7px] text-[11px]',
            'placeholder:text-[#737373]',
            'focus:outline-none',
          )}
        />
        <div className="flex w-full divide-x-[0.5px] divide-[#8C8C8C] border-t-[0.5px] border-[#8C8C8C] text-[18px] font-medium text-[#0045CC]">
          <button
            onClick={() => setShowModal(false)}
            type="button"
            className="flex-1 py-[12px]"
          >
            취소
          </button>
          <button
            onClick={handleChangeName}
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
