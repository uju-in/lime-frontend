'use client'

import { cn } from '@/app/_utils/twMerge'

interface PropsType {
  item1Votes: number
  item2Votes: number
}

export default function ProgressBar({ item1Votes, item2Votes }: PropsType) {
  const maxWidth = 514
  const totalVotes = item1Votes + item2Votes
  const item1Width = (maxWidth * item1Votes) / totalVotes
  const item2Width = (maxWidth * item2Votes) / totalVotes

  if (item1Votes === 0 && item2Votes === 0) {
    return (
      <div
        className={cn(
          'mt-[26px] flex h-[49px] w-[514px] items-center text-[22px] font-[500]',
          'mo:w-full',
        )}
      >
        <div className="flex h-full w-full items-center justify-center rounded-[8px] bg-[#000] text-[#fff]">
          0명
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'mt-[26px] flex h-[49px] items-center text-[22px] font-[500]',
        'mo:w-full',
      )}
    >
      {item1Votes !== 0 && (
        <div
          style={{ width: `${item1Width}px` }}
          className={cn(
            'flex h-full items-center justify-center bg-[#000] text-[#fff]',
            {
              'rounded-[8px]': item2Votes === 0,
              'rounded-l-[8px]': item2Votes !== 0,
            },
          )}
        >
          {item1Votes}명
        </div>
      )}
      {item2Votes !== 0 && (
        <div
          style={{ width: `${item2Width}px` }}
          className={cn(
            'flex h-full items-center justify-center bg-[#EAEAEA]',
            {
              'rounded-[8px]': item1Votes === 0,
              'rounded-r-[8px]': item1Votes !== 0,
            },
          )}
        >
          {item2Votes}명
        </div>
      )}
    </div>
  )
}
