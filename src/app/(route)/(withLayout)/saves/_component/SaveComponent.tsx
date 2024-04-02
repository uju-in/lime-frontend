'use client'

import React, { useEffect, useState } from 'react'
import { SaveFolderType, SavePageMode } from '@/app/_types/save.type'
import useSaveList from '@/app/_hook/api/saves/useSavesList'
import { cn } from '@/app/_utils/twMerge'
import { useSetRecoilState } from 'recoil'
import { saveModeState } from '@/app/_atoms/saveModeState'

import { SaveHeader } from './SaveHeader'
import SaveList from './SaveList'
import AddFolderModal from './AddFolderModal'

export default function SaveComponent() {
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)
  const setMode = useSetRecoilState(saveModeState)

  const { saveInfo, isLoading, isError } = useSaveList('all')

  useEffect(
    function resetMode() {
      setMode(SavePageMode.DEFAULT)
    },
    [setMode],
  )

  if (isLoading) return <div>...loading</div>
  if (isError) return null

  const folderList: SaveFolderType[] = saveInfo.favoriteInfos.filter(
    (item: SaveFolderType) => item.type === 'FOLDER',
  )

  return (
    <section className="mx-auto h-full max-w-[1200px] px-[10px]">
      {/* Header */}
      <div className={cn('block', 'mo:hidden')}>
        <SaveHeader.Default setShowAddFolderModal={setShowAddFolderModal} />
      </div>
      <SaveList folderList={folderList} />
      {/* ------ 모달 ------ */}
      {showAddFolderModal && (
        <AddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
      )}
    </section>
  )
}
