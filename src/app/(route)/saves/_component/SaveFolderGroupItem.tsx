import { cn } from '@/app/_utils/twMerge'
import React from 'react'

export default function SaveFolderGroupItem({
  folderName,
  disabled,
}: {
  folderName: string
  disabled: boolean
}) {
  return (
    <div
      className={cn('relative mr-5 flex h-[232px] w-[387px]', {
        'cursor-auto': disabled,
        'cursor-pointer': !disabled,
      })}
    >
      <div className="z-0 h-[232px] w-[240px] rounded-l-[8.83px] bg-[#BCBCBC]" />
      <div className="z-0">
        <div className="h-[116px] w-[147px] rounded-tr-[8.83px] bg-[#DBDBDB]" />
        <div className="h-[116px] w-[147px] rounded-br-[8.83px] bg-[#F5F5F5]" />
      </div>
      {disabled && (
        <div className="absolute left-0 top-0 z-20 h-full w-full bg-white opacity-80" />
      )}
      <div className="absolute left-0 top-0 z-10 h-[193px] w-full rounded-t-[8.83px] bg-gradient-folder pl-4 pt-4">
        <p className="text-[20px] font-[700] text-white drop-shadow-[0.774px_0.774px_2.012px_rgba(0,0,0,0.30)]">
          {folderName}
        </p>
      </div>
    </div>
  )
}
