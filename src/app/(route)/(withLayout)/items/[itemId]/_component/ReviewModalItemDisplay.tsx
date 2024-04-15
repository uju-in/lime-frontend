'use client'

import Image from 'next/image'

interface PropsType {
  itemData: {
    id: number
    name: string
    price: number
    image: string
  }
}

export default function ReviewModalItemDisplay({ itemData }: PropsType) {
  return (
    <div className="mb-[40px] flex gap-[20px] rounded-[8px] bg-[#F4F4F4] p-[20px]">
      <Image
        width={80}
        height={80}
        className="rounded-[3.736px]"
        src={itemData.image}
        alt="item image"
      />
      <div className="flex flex-col justify-center gap-[18px]">
        <div className="text-[18px]">{itemData.name}</div>
        <strong className="text-[20px] font-semibold">
          {itemData.price.toLocaleString()}원
        </strong>
      </div>
    </div>
  )
}
