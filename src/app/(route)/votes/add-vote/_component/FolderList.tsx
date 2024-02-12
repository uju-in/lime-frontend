'use client'

import React, { useState } from 'react'

import { SaveItemType } from '@/app/_types/saveItem.type'

import Folder from './Folder'

interface PropsType {
  favoriteInfos: SaveItemType[]
  folderId: number | null
  setFolderId: React.Dispatch<React.SetStateAction<number | null>>
}

export default function FolderList(props: PropsType) {
  const { favoriteInfos, setFolderId, folderId } = props

  /** 폴더 선택 여부 */
  const [isFolderSelected, setIsFolderSelected] = useState<boolean>(false)

  return (
    <div className="flex-1 overflow-y-scroll">
      {favoriteInfos
        ?.filter((item) => item.type === 'FOLDER')
        ?.map((folder) => (
          <Folder
            key={folder.favoriteId}
            folder={folder}
            isFolderSelected={folder.favoriteId === folderId}
            setIsFolderSelected={setIsFolderSelected}
            setFolderId={setFolderId}
          />
        ))}
    </div>
  )
}
