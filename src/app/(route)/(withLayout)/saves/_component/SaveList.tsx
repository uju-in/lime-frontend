'use client'

import {
  SaveFolderType,
  SaveItemType,
  SavePageMode,
} from '@/app/_types/save.type'

import React from 'react'
import { cn } from '@/app/_utils/twMerge'
import SaveFolderGroupItem from './SaveFolderGroupItem'

interface Props {
  folderList: SaveFolderType[]
}

export default function SaveList({ folderList }: Props) {
  return (
    <>
      {/* 폴더 */}
      <div
        className={cn(
          'mb-[40px] grid grid-cols-3 gap-[17px]',
          'tablet:grid-cols-2',
          'mo:grid-cols-1',
        )}
      >
        {folderList.map((item: SaveFolderType) => {
          return (
            <SaveFolderGroupItem
              key={item.favoriteId}
              id={item.favoriteId}
              folderName={item.originalName}
              imageUrls={item.metadata.folderMetadata.imageUrls}
              itemCount={item.metadata.folderMetadata.itemCount}
            />
          )
        })}
      </div>
    </>
  )
}
