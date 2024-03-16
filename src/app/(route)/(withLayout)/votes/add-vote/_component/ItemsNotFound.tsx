'use client'

export default function ItemsNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <strong className="mb-[12px] text-[20px] font-[600]">
        찜한 아이템이 없어요
      </strong>
      <p className="text-[14px] font-[500]">마음에 드는 아이템을 담아보세요</p>
    </div>
  )
}
