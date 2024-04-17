'use client'

import { Fragment } from 'react'
import { cn } from '@/app/_utils/twMerge'
import { SortOption } from '@/app/_types/review.type'
import { sortOptions } from '../_constants'

interface PropsType {
  sortOption: SortOption
  setSortOption: React.Dispatch<React.SetStateAction<SortOption>>
}

export default function ReviewSortOptions({
  sortOption,
  setSortOption,
}: PropsType) {
  return (
    <div className="mb-[12px] mt-[30px] flex items-center gap-[10px] text-[12px] font-[500]">
      {sortOptions.map((option, index) => (
        <Fragment key={option.value}>
          {index > 0 && <div className="h-[10px] w-[0.5px] bg-[#D4D4D4]" />}
          <button
            type="button"
            className={cn({
              'text-[#000]': sortOption === option.value,
              'text-[#BCBCBC]': sortOption !== option.value,
            })}
            onClick={() => setSortOption(option.value)}
          >
            {option.label}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
