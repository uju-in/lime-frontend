import React from 'react'
import Image from 'next/image'
import Layout from '@/app/_components/layout/Layout'
import { Item } from '../../items/_components/ItemList'

export default function page() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-[20px]">
        <div className="text-[30px] font-bold">농구</div>
        <div className="flex items-center gap-[10px] text-[14px]">
          <div className="flex cursor-pointer gap-[5px] rounded-full border px-[23.5px] py-[7px]">
            <Image
              src="/image/icon/icon-pencil.svg"
              alt="pencil"
              width={15}
              height={15}
            />
            폴더편집
          </div>
          <div className="cursor-pointer">아이템 담으러가기</div>
        </div>
      </div>
      <div className="my-[40px]">
        <div className="mx-auto grid max-w-[790px] grid-cols-[repeat(auto-fill,150px)] justify-center gap-x-[10px] gap-y-[25px]">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </Layout>
  )
}
