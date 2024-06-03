'use client'

import Loading from '@/app/_components/loading'
import { useFolderList } from '@/app/_hook/api/votes/queries/useFolderList'
import { cn } from '@/app/_utils/twMerge'
import { Suspense, useState } from 'react'
import FolderList from './FolderList'
import VoteItemsSelector from './VoteItemsSelector'

interface PropsType {
  showMobileItemList: boolean
  setShowMobileItemList: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentFolderName: React.Dispatch<React.SetStateAction<string>>
}

export default function VoteItemList(props: PropsType) {
  const { showMobileItemList, setShowMobileItemList, setCurrentFolderName } =
    props

  const [selectedFolder, setSelectedFolder] = useState<{
    folderId: number | null
    itemCount: number | null
  }>({ folderId: null, itemCount: null })

  const { folderList } = useFolderList('folder')
  const { favoriteInfos } = folderList

  return (
    <div
      className={cn(
        'flex h-[410px] w-[760px] rounded-[8px] border border-[#DADADA]',
        'mo:w-full mo:border-none',
      )}
    >
      <FolderList
        favoriteInfos={favoriteInfos}
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
            favoriteInfos={favoriteInfos}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
            setCurrentFolderName={setCurrentFolderName}
          />
        </div>
      ) : (
        <div className={cn('hidden w-full', 'mo:block')}>
          <Suspense fallback={<Loading />}>
            <VoteItemsSelector selectedFolder={selectedFolder} />
          </Suspense>
        </div>
      )}
      <div className={cn('flex-1 overflow-y-auto pl-[16px]', 'mo:hidden')}>
        <Suspense fallback={<Loading />}>
          <VoteItemsSelector selectedFolder={selectedFolder} />
        </Suspense>
      </div>
    </div>
  )
}
