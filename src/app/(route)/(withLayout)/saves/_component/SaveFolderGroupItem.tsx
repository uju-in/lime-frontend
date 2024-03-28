import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  folderName: string
  id: number
  itemCount: number
  imageUrls: string[]
}

const gray64Img =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAAB5CAYAAAA9OhPxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgB7dJRDYAwFMDAB5lQnIGmKWIi+nmX1EGvvfczEFindyBwD0TMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxExkxkzETGTGTMRMZMZMxEZp2+gcAPe0EFC+eeLFQAAAAASUVORK5CYII='

export default function SaveFolderGroupItem(props: Props) {
  const { folderName, id, imageUrls, itemCount } = props
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => {
        router.push(`/saves/${id}?name=${folderName}`)
      }}
      className="relative flex h-[240px] overflow-hidden rounded-[9px] bg-[#D2D2D2]"
    >
      <div
        style={{
          backgroundImage: `url('${itemCount > 0 ? imageUrls[0] : gray64Img}')`,
        }}
        className="h-full w-full flex-1 bg-cover bg-center bg-no-repeat"
      />
      <div className="flex h-full w-[147px] flex-col items-center">
        <div
          style={{
            backgroundImage: `url('${itemCount > 1 ? imageUrls[1] : gray64Img}')`,
          }}
          className="h-full w-full flex-1 bg-cover bg-center bg-no-repeat"
        />
        <div
          style={{
            backgroundImage: `url('${itemCount > 2 ? imageUrls[2] : gray64Img}')`,
          }}
          className="h-full w-full flex-1 bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="absolute left-0 top-0 z-10 h-[193px] w-full rounded-t-[9px] bg-gradient-folder pl-4 pt-4">
        <p className="text-left text-[20px] font-[700] text-white drop-shadow-[0.774px_0.774px_2.012px_rgba(0,0,0,0.30)]">
          {folderName}
        </p>
      </div>
    </button>
  )
}
