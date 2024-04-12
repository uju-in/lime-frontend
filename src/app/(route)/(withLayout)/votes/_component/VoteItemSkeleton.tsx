'use client'

import { cn } from '@/app/_utils/twMerge'

function SkeletonUI() {
  return (
    <div className="flex w-full animate-pulse flex-col rounded-[8px] border border-[#E6E6E6] bg-white px-[24px] py-[12px]">
      <div className="flex h-[208px]">
        <div className="h-full w-[50%] bg-gray-200" />
        <div className="h-full w-[50%] bg-gray-200" />
      </div>
      <p className="mt-[18px] h-[25px] w-full bg-gray-200" />
      <p className="mt-[9px] h-[15px] w-1/2 bg-gray-200" />
      <div className="mt-[16px] flex justify-center">
        <div className="h-[48px] w-full max-w-[132px] rounded-[8px] bg-gray-300" />
      </div>
    </div>
  )
}

export default function VoteItemSkeleton() {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-2 gap-[20px]',
        'mo:grid-cols-1 mo:gap-[16px]',
      )}
    >
      <SkeletonUI />
      <SkeletonUI />
    </div>
  )
}
