'use client'

import React from 'react'
import Image from 'next/image'
import { SaveItemType } from '@/app/_types/saveItem.type'

interface PropsType {
  folder: SaveItemType
  isFolderSelected: boolean
  setIsFolderSelected: React.Dispatch<React.SetStateAction<boolean>>
  setFolderId: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Folder(props: PropsType) {
  const { folder, isFolderSelected, setIsFolderSelected, setFolderId } = props
  const { originalName, favoriteId } = folder

  const handleSelectFolder = () => {
    setFolderId(favoriteId)
    setIsFolderSelected(false)
  }

  console.log(folder)

  return (
    <button
      type="button"
      className={` ${
        isFolderSelected ? 'bg-[#E5E5E5]' : 'bg-[#fff]'
      } flex w-full items-center border border-x-0 border-t-0 border-b-[#DADADA] py-[12px] pl-[18px]`}
      onClick={handleSelectFolder}
    >
      <Image
        width={52}
        height={52}
        src="/image/icon/icon-close.svg"
        alt="folder image"
        className="rounded-[4px]"
      />
      <strong className="font=[500] ml-[16px]">{originalName}</strong>
    </button>
  )
}
