'use client'

import { fetchFavoriteList } from '@/app/_hook/api/votes/useFavoritesList'
import { useEffect, useState } from 'react'
import {
  CurrentFavoriteItemMetadata,
  SaveItemType,
} from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import { useRecoilState } from 'recoil'
import FolderList from './FolderList'
import FavoriteList from './FavoriteItemList'
import ItemsNotFound from './ItemsNotFound'

interface PropsType {
  setCurrentSelectedItem: React.Dispatch<
    React.SetStateAction<CurrentFavoriteItemMetadata | null>
  >
  currentSelectedItem: CurrentFavoriteItemMetadata | null
  showMobileItemList: boolean
  setShowMobileItemList: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentFolderName: React.Dispatch<React.SetStateAction<string>>
}

export default function VoteItemList(props: PropsType) {
  const {
    setCurrentSelectedItem,
    currentSelectedItem,
    showMobileItemList,
    setShowMobileItemList,
    setCurrentFolderName,
  } = props

  const [folderInfo, setFolderInfo] = useState<SaveItemType[]>([])
  const [selectedFolder, setSelectedFolder] = useState<{
    folderId: number | null
    itemCount: number | null
  }>({ folderId: null, itemCount: null })

  const fetchFolderList = async () => {
    const { favoriteInfos } = await fetchFavoriteList({ type: 'folder' })
    setFolderInfo(favoriteInfos)
  }

  useEffect(() => {
    fetchFolderList()
  }, [showMobileItemList])

  return (
    <div
      className={cn(
        'flex h-[410px] w-[760px] rounded-[8px] border border-[#DADADA]',
        'mo:w-full mo:border-none',
      )}
    >
      <FolderList
        favoriteInfos={folderInfo}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        setCurrentFolderName={setCurrentFolderName}
      />
      {!showMobileItemList ? (
        <div
          className="hidden w-full mo:block"
          onClick={() => {
            setShowMobileItemList(true)
          }}
        >
          <FolderList
            favoriteInfos={folderInfo}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
            setCurrentFolderName={setCurrentFolderName}
          />
        </div>
      ) : (
        <div className={cn('hidden w-full', 'mo:block')}>
          <FavoriteList
            folderId={selectedFolder.folderId}
            currentSelectedItem={currentSelectedItem}
            setCurrentSelectedItem={setCurrentSelectedItem}
          />
        </div>
      )}
      <div className={cn('flex-1 overflow-y-auto pl-[16px]', 'mo:hidden')}>
        {selectedFolder.itemCount !== 0 ? (
          <>
            <p className="my-[13px] text-[12px]">
              아이템 {selectedFolder.itemCount}개
            </p>
            <FavoriteList
              folderId={selectedFolder.folderId}
              currentSelectedItem={currentSelectedItem}
              setCurrentSelectedItem={setCurrentSelectedItem}
            />
          </>
        ) : (
          <ItemsNotFound />
        )}
      </div>
    </div>
  )
}
