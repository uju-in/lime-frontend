'use client'

import { fetchFavoriteList } from '@/app/_hook/api/useFavoritesList'
import { useEffect, useState } from 'react'
import { SaveItemType } from '@/app/_types/saveItem.type'
import FolderList from './FolderList'

export default function VoteItemList() {
  const [folderInfo, setFolderInfo] = useState<SaveItemType[]>([])
  const [selectedFolder, setSelectedFolder] = useState<{
    folderId: number | null
    itemCount: number | null
  }>({ folderId: null, itemCount: null })

  const fetchFolderList = async () => {
    const { favoriteInfos } = await fetchFavoriteList({ type: 'folder' })
    setFolderInfo(favoriteInfos)
    console.log(favoriteInfos)
  }

  console.log(selectedFolder)

  useEffect(() => {
    fetchFolderList()
  }, [])

  return (
    <div className="flex h-[410px] w-[760px] rounded-[8px] border  border-[#DADADA]">
      <FolderList
        favoriteInfos={folderInfo}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
      <div className="flex-1 overflow-y-auto pl-[16px]">
        {selectedFolder.itemCount !== 0 ? (
          <>
            <p className="my-[13px] text-[12px]">
              아이템 ${selectedFolder.itemCount}개
            </p>
            {/* <FavoriteList
              favoriteInfos={favoriteInfos}
              folderId={folderId}
              currentSelectedItem={currentSelectedItem}
              setCurrentSelectedItem={setCurrentSelectedItem}
            /> */}
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <strong className="mb-[12px] text-[20px] font-[600]">
              찜한 아이템이 없어요
            </strong>
            <p className="text-[14px] font-[500]">
              마음에 드는 아이템을 담아보세요
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
