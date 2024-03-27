import Modal from '@/app/_components/modal'
import useDeleteSave from '@/app/_hook/api/saves/useDeleteSave'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MoDeleteFolderModal({ setShowModal }: Props) {
  const { mutateAsync: deleteFolder } = useDeleteSave()
  const { folderId } = useParams()
  const router = useRouter()

  const handleDeleteFolder = async () => {
    const req = { favoriteItemIds: [], folderIds: [Number(folderId)] }
    await deleteFolder(req)
    router.replace('/saves')
    setShowModal(false)
  }

  return (
    <Modal>
      <div className="bg-[#F2F2F2]">
        <div className="flex flex-col items-center gap-[6px] p-[20px_73px]">
          <h1 className="text-[14px] font-semibold">경고</h1>
          <div className="w-max text-[12px]">폴더를 삭제하시겠습니까?</div>
        </div>
        <div className="flex w-full divide-x-[0.5px] divide-[#8C8C8C] border-t-[0.5px] border-[#8C8C8C] text-[18px] font-medium text-[#0045CC]">
          <button
            onClick={() => setShowModal(false)}
            type="button"
            className="flex-1 py-[12px]"
          >
            아니요
          </button>
          <button
            onClick={handleDeleteFolder}
            type="button"
            className="flex-1 py-[12px] text-[#F00]"
          >
            예
          </button>
        </div>
      </div>
    </Modal>
  )
}
