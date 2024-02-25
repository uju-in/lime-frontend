'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { deleteVote } from '@/app/_hook/api/votes/useDeleteVote'
import useOutsideClick from '@/app/_hook/common/useOutsideClick'

export default function ManagementButton({ voteId }: { voteId: number }) {
  const router = useRouter()

  const dropdownRef = useRef(null)

  const [showSnackBar, setShowSnackBar] = useState<boolean>(false)

  useOutsideClick(dropdownRef, () => {
    if (showSnackBar) {
      setShowSnackBar(false)
    }
  })

  const handleDeleteVote = async () => {
    const status = await deleteVote(voteId)

    if (status === 200) {
      router.push('/votes')
    }
  }

  return (
    <div className="relative">
      <Image
        width={19.322}
        height={19.322}
        src="/image/icon/icon-kebab_menu.svg"
        alt="kebab menu"
        className="cursor-pointer"
        onClick={() => setShowSnackBar((prev) => !prev)}
      />
      {showSnackBar && (
        <div
          className="absolute right-[6px] top-[30px] h-[34px] w-[96px] rounded-[4px] border border-black"
          ref={dropdownRef}
        >
          <button
            type="button"
            className="flex h-full w-full items-center justify-center gap-[10px]"
            onClick={handleDeleteVote}
          >
            <span className="text-[12px] font-[600] text-[#535353]">
              삭제하기
            </span>
            <Image
              width={12}
              height={12}
              src="/image/icon/icon-trash_can.svg"
              alt="delete vote"
            />
          </button>
        </div>
      )}
    </div>
  )
}
