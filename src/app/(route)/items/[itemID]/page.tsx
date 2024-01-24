import React from 'react'
import Image from 'next/image'

import fetchItemDetail from '@/app/_hook/api/useGetItemDetail'

import ReviewSection from './_component/ReviewSection'
import { ActionButtons } from './_component/ActionButtons'

export default async function DetailPage() {
  const data = await fetchItemDetail(160)

  console.log(data)

  return (
    <section className="mx-auto mt-[32px] w-[720px]">
      {/** 상단 아이템 정보 */}
      <article className="flex h-[227px] justify-between">
        <Image
          className="rounded-[8px]"
          width={227}
          height={227}
          src={data.itemInfo.image}
          alt="grade"
        />
        <div className="w-[473px]">
          <div className="h-[179px] w-[473px] border-t-[3px] border-[#000]">
            <p className="mt-3 text-[22px] font-[600]">{data.itemInfo.name}</p>
            <div className="mt-4 flex">
              <Image
                className="mr-1"
                width={14}
                height={14}
                src="/image/icon/icon-filled_star.svg"
                alt="grade"
              />
              <p className="text-[14px] font-[500] text-[#6F6F6F]">4.5/5</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p className="text-[26px] font-[700]">
                {data.itemInfo.price.toLocaleString()}원
              </p>
              <div className="flex items-center font-[500] text-[#6F6F6F]">
                <Image
                  className="mr-2"
                  width={13}
                  height={13}
                  src="/image/icon/icon-save.svg"
                  alt="save"
                />
                <p>24</p>
              </div>
            </div>
          </div>
          {/** 아이템 담기, 구매하러 가기 버튼 */}
          <ActionButtons itemUrl={data.itemUrl} />
        </div>
      </article>
    </section>
  )
}
