'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ManagementButton() {
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false)

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
        <div className="absolute right-[6px] top-[30px] h-[34px] w-[96px] rounded-[4px] border border-black">
          <button
            type="button"
            className="flex h-full w-full items-center justify-center gap-[10px]"
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
