'use client'

import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import FavoriteList from './FavoriteItemList'

interface PropsType {
  selectedFolder: {
    folderId: number | null
    itemCount: number | null
  }
  currentSelectedItem: CurrentFavoriteItemMetadata | null
  setCurrentSelectedItem: React.Dispatch<
    React.SetStateAction<CurrentFavoriteItemMetadata | null>
  >
}

export default function VoteItemsSelector(props: PropsType) {
  const { currentSelectedItem, setCurrentSelectedItem, selectedFolder } = props

  return (
    <div>
      {selectedFolder.itemCount !== 0 && selectedFolder.folderId ? (
        <>
          <p className={cn('my-[13px] text-[12px]', 'mo:hidden')}>
            아이템 {selectedFolder.itemCount}개
          </p>
          <FavoriteList
            folderId={selectedFolder.folderId}
            currentSelectedItem={currentSelectedItem}
            setCurrentSelectedItem={setCurrentSelectedItem}
          />
        </>
      ) : (
        <div
          className={cn(
            'flex h-full flex-col items-center justify-center pt-[160px]',
            'mo:pt-[250px]',
          )}
        >
          <strong className="mb-[12px] text-[20px] font-[600]">
            찜한 아이템이 없어요
          </strong>
          <p className="text-[14px] font-[500]">
            마음에 드는 아이템을 담아보세요
          </p>
        </div>
      )}
    </div>
  )
}
