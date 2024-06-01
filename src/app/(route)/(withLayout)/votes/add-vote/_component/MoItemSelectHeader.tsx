'use client'

import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

interface PropsType {
  setShowMobileItemList: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentFolderName: React.Dispatch<React.SetStateAction<string>>
  currentSelectedItem: CurrentFavoriteItemMetadata | null
  currentFolderName: string
  handleSelectItem: () => void
}

export default function MoItemSelectHeader(props: PropsType) {
  const {
    setShowMobileItemList,
    setCurrentFolderName,
    currentSelectedItem,
    handleSelectItem,
    currentFolderName,
  } = props

  return (
    <header className={cn('hidden', 'mo:block')}>
      <div className="flex h-[40px] items-center justify-center">
        <div className="h-0 w-[42px] rounded-[6px] border-[3px] bg-[#D2D2D2]" />
      </div>
      <div className="flex h-[42px] items-center justify-center px-[16px] font-[600]">
        <button
          type="button"
          className="flex flex-1 justify-start"
          onClick={() => {
            setShowMobileItemList(false)
            setCurrentFolderName('찜목록')
          }}
        >
          <Image
            width={7}
            height={15}
            src="/image/icon/icon-arrow_left_black.svg"
            alt="close"
          />
        </button>
        <strong className="flex-none px-4 text-center">
          {currentFolderName}
        </strong>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className={cn({
              'text-black': currentSelectedItem,
              'text-[#C3C3C3]': !currentSelectedItem,
            })}
            onClick={handleSelectItem}
          >
            선택완료
          </button>
        </div>
      </div>
    </header>
  )
}
