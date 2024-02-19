'use client'

import useSaveList from '@/app/_hook/api/useSavesList'
import { SavePageMode } from '@/app/_types/save.type'

import React from 'react'
import SaveFolderGroupItem from './SaveFolderGroupItem'

interface Props {
  mode: SavePageMode
}

export default function SaveList({ mode }: Props) {
  const { data, isLoading, isError } = useSaveList()
  if (isLoading) return <div>...loading</div>
  if (isError) return null

  const folderList = data.favoriteInfos.filter(
    (item: any) => item.type === 'FOLDER',
  )

  return (
    <div className="mb-[40px] grid grid-cols-[repeat(auto-fill,387px)] gap-[17px]">
      {folderList.map((item: any) => {
        return (
          <SaveFolderGroupItem
            key={item.favoriteId}
            id={item.favoriteId}
            folderName={item.originalName}
            imageUrls={item.metadata.folderMetadata.imageUrls}
            disabled={mode === SavePageMode.EDIT_LIST}
          />
        )
      })}
    </div>
  )
}
