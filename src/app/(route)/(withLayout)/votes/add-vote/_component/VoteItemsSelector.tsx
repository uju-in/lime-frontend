'use client'

import { cn } from '@/app/_utils/twMerge'
import FavoriteList from './FavoriteItemList'

interface PropsType {
  selectedFolder: {
    folderId: number | null
    itemCount: number | null
  }
}

export default function VoteItemsSelector({ selectedFolder }: PropsType) {
  if (
    (!selectedFolder.itemCount && !selectedFolder.folderId) ||
    selectedFolder.itemCount === 0
  ) {
    return (
      <div
        className={cn(
          'flex h-full flex-col items-center justify-center pt-[160px]',
          'mo:pt-[250px]',
        )}
      >
        <strong className="mb-[12px] text-[20px] font-[600]">
          찜한 아이템이 없어요
        </strong>
        <span className="text-[14px] font-[500]">
          마음에 드는 아이템을 담아보세요
        </span>
      </div>
    )
  }

  return (
    <>
      <span className={cn('my-[13px] block text-[12px]', 'mo:hidden')}>
        아이템 {selectedFolder.itemCount}개
      </span>
      <FavoriteList folderId={selectedFolder.folderId} />
    </>
  )
}
