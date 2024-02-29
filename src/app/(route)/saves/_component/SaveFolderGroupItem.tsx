import { cn } from '@/app/_utils/twMerge'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

interface Props {
  folderName: string
  id: number
  itemCount: number
  disabled: boolean
  imageUrls: string[]
}

const gray64Img =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAAB5CAYAAAA9OhPxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgB7dJRDYAwFMDAB5lQnIGmKWIi+nmX1EGvvfczEFindyBwD0TMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxEZp2+gcAPe0EFC+eeLFQAAAAASUVORK5CYII='

export default function SaveFolderGroupItem(props: Props) {
  const { folderName, id, disabled, imageUrls, itemCount } = props
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => {
        router.push(`/saves/${id}?name=${folderName}`)
      }}
      disabled={disabled}
      className={cn(
        'relative mr-5 flex h-[240px] w-[387px] overflow-hidden rounded-[9px] bg-[#D2D2D2]',
        {
          'cursor-auto': disabled,
          'cursor-pointer': !disabled,
        },
      )}
    >
      <Image
        src={itemCount > 0 ? imageUrls[0] : gray64Img}
        className="z-0 rounded-l-[9px]"
        width={240}
        height={240}
        alt="img"
      />
      <div>
        <Image
          src={itemCount > 1 ? imageUrls[1] : gray64Img}
          className="z-0 rounded-tr-[9px]"
          width={147}
          height={120}
          alt="img"
        />
        <Image
          src={itemCount > 2 ? imageUrls[2] : gray64Img}
          className="z-0 rounded-br-[9px]"
          width={147}
          height={120}
          alt="img"
        />
      </div>
      {disabled && (
        <div className="absolute left-0 top-0 z-20 h-full w-full bg-white opacity-80" />
      )}
      <div className="absolute left-0 top-0 z-10 h-[193px] w-full rounded-t-[9px] bg-gradient-folder pl-4 pt-4">
        <p className="text-left text-[20px] font-[700] text-white drop-shadow-[0.774px_0.774px_2.012px_rgba(0,0,0,0.30)]">
          {folderName}
        </p>
      </div>
    </button>
  )
}
