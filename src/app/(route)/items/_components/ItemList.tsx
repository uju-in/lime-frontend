import React from 'react'
import Image from 'next/image'

export function Item() {
  return (
    <div className="flex w-[150px] flex-col gap-[7px] text-[14px]">
      <div className="h-[150px] cursor-pointer rounded-[8px] bg-[#D2D2D2]" />
      <div className="cursor-pointer text-[#515151] hover:underline">
        영결무람 문라이트 야광 반사 농구공 레인보우
      </div>
      <strong>29,200원</strong>
      <div className="flex gap-[20px] text-[13px] text-[#6F6F6F]">
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-save.svg"
            alt="save"
            width={18}
            height={18}
          />
          <div>24</div>
        </div>
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-review.svg"
            alt="review"
            width={18}
            height={18}
          />
          <div>12</div>
        </div>
      </div>
    </div>
  )
}

export default function ItemList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,150px)] gap-x-[10px] gap-y-[25px]">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}
