'use client'

import { FolderMetadataType, SaveItemType } from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useCallback } from 'react'

interface PropsType {
  favoriteInfos: SaveItemType[]
  selectedFolder: { folderId: number | null; itemCount: number | null }
  setSelectedFolder: React.Dispatch<
    React.SetStateAction<{ folderId: number | null; itemCount: number | null }>
  >
  setCurrentFolderName: React.Dispatch<React.SetStateAction<string>>
}

export default function FolderList(props: PropsType) {
  const {
    favoriteInfos,
    selectedFolder,
    setSelectedFolder,
    setCurrentFolderName,
  } = props

  /** select folderId, itemCount */
  const handleSelectFolder = useCallback(
    (favoriteId: number, itemCount: number, originalName: string) => {
      const isSelected = favoriteId === selectedFolder.folderId

      if (!isSelected) {
        setSelectedFolder({ folderId: favoriteId, itemCount })
      }

      setCurrentFolderName(originalName)
    },
    [selectedFolder, setSelectedFolder],
  )

  return (
    <div className="flex-1 overflow-y-scroll">
      {favoriteInfos.map((item) => {
        const { metadata, favoriteId, originalName } = item
        const { folderMetadata } = metadata as FolderMetadataType

        return (
          <div
            key={favoriteId}
            className={cn(
              'flex w-full cursor-pointer items-center rounded-[8px] border border-x-0 border-t-0 border-b-[#DADADA] py-[12px] pl-[18px]',
              {
                'bg-[#E5E5E5]': selectedFolder.folderId === favoriteId,
                'bg-[#fff]': selectedFolder.folderId !== favoriteId,
              },
            )}
            onClick={() =>
              handleSelectFolder(
                favoriteId,
                folderMetadata.itemCount,
                originalName,
              )
            }
          >
            <Image
              width={52}
              height={52}
              src={folderMetadata.imageUrls[0] || `/image/icon/icon-close.svg`}
              alt="folder image"
              className="rounded-[4px]"
            />
            <strong className="font=[500] ml-[16px]">{originalName}</strong>
          </div>
        )
      })}
    </div>
  )
}
