import React from 'react'
import Image from 'next/image'

import fetchItemDetail from '@/app/_hook/api/useGetItemDetail'

import RQProvider from '@/app/_components/RQProvider'
import ReviewSection from './_component/ReviewSection'
import ActionButtons from './_component/ActionButtons'

import { categoryFormatter } from './_utils/categoryFormatter'

export default async function DetailPage() {
  const data = await fetchItemDetail(167)

  console.log(data)

  return (
    <section className="mx-auto mt-[32px] w-[720px]">
      {/** 아이템 브레드 크럼 */}
      <p className="mb-[8px] flex text-[12px] font-[500] text-[#ADADAD]">
        아이템 &nbsp; &gt; &nbsp;
        <p>{categoryFormatter(data.hobbyName)}</p>
        &nbsp; &gt; &nbsp;
        <p>{data?.hobbyName}</p>
      </p>
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
            <div className="flex">
              <Image
                className="mr-1"
                width={14}
                height={14}
                src="/image/icon/icon-filled_star.svg"
                alt="grade"
              />
              <p className="text-[14px] font-[500] text-[#6F6F6F]">
                {data.itemAvgRate}/5
              </p>
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
                <p>{data.favoriteCount}</p>
              </div>
            </div>
          </div>
          {/** 아이템 담기, 구매하러 가기 버튼 */}
          <RQProvider>
            <ActionButtons itemUrl={data.itemUrl} itemId={data.itemInfo.id} />
          </RQProvider>
        </div>
      </article>
      {/** 하단 리뷰 */}
      <RQProvider>
        <ReviewSection itemId={data.itemInfo.id} />
      </RQProvider>
    </section>
  )
}
