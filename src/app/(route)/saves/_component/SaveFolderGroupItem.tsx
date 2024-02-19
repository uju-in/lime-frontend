import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  folderName: string
  id: number
  disabled: boolean
  imageUrls: string[]
}

export default function SaveFolderGroupItem(props: Props) {
  const { folderName, id, disabled, imageUrls } = props

  return (
    <Link
      href={`/saves/${id}`}
      className={cn('relative mr-5 flex h-[240px] w-[360px] overflow-hidden', {
        'cursor-auto': disabled,
        'cursor-pointer': !disabled,
      })}
    >
      <Image
        src={imageUrls[0]}
        className="z-0 rounded-l-[8.83px]"
        width={240}
        height={240}
        alt="img"
      />
      <div>
        <Image
          src={imageUrls[1]}
          className="z-0 rounded-tr-[8.83px]"
          width={120}
          height={120}
          alt="img"
        />
        <Image
          src={imageUrls[2]}
          className="z-0 rounded-br-[8.83px]"
          width={120}
          height={120}
          alt="img"
        />
      </div>
      {disabled && (
        <div className="absolute left-0 top-0 z-20 h-full w-full bg-white opacity-80" />
      )}
      <div className="absolute left-0 top-0 z-10 h-[193px] w-full rounded-t-[8.83px] bg-gradient-folder pl-4 pt-4">
        <p className="text-[20px] font-[700] text-white drop-shadow-[0.774px_0.774px_2.012px_rgba(0,0,0,0.30)]">
          {folderName}
        </p>
      </div>
    </Link>
  )
}
