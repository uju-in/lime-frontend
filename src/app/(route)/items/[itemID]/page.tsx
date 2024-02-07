import React, { Suspense } from 'react'
import Image from 'next/image'

import { fetchItemDetail } from '@/app/_hook/api/useItemDetail'
import { categoryFormatter } from './_utils/categoryFormatter'

import ActionButtons from './_component/ActionButtons'
import { ReviewSectionSkeletonUI } from './_component/ReviewSkeletonUI'
import ReviewSection from './_component/ReviewSection'
import NoSSRRendering from './_component/NoSSRRendering'

export default async function DetailPage() {
  const itemData = await fetchItemDetail(160)

  const { itemInfo, hobbyName, itemUrl, itemAvgRate, favoriteCount } = itemData

  return (
    <section className="mx-auto mt-[32px] w-[720px]" suppressHydrationWarning>
      {/** 아이템 브레드 크럼 */}
      <div className="breadcrumb mb-[8px] flex gap-[0_8px] text-[12px] font-[500] text-[#ADADAD]">
        <span>아이템</span>
        <span>&gt;</span>
        <span>{categoryFormatter(hobbyName)}</span>
        <span>&gt;</span>
        <span>{hobbyName}</span>
      </div>
      <article className="flex h-[227px] justify-between">
        <Image
          className="rounded-[8px]"
          width={227}
          height={227}
          src={itemInfo.image}
          alt="grade"
        />
        <div className="w-[473px]">
          <div className="h-[179px] w-[473px] border-t-[3px] border-[#000]">
            <p className="mt-[16px] text-[22px] font-[700]">{itemInfo.name}</p>
            <div className="mt-[8px] flex">
              <Image
                className="mr-1"
                width={14}
                height={14}
                src="/image/icon/icon-filled_star.svg"
                alt="grade"
              />
              <span className="text-[14px] font-[500] text-[#6F6F6F]">
                {itemAvgRate}/5
              </span>
            </div>
            <div className="mt-[43px] flex justify-between">
              <strong className="text-[26px] font-[700]">
                {itemInfo.price.toLocaleString()}원
              </strong>
              <div className="flex items-center">
                <Image
                  className="mr-1"
                  width={20}
                  height={20}
                  src="/image/icon/icon-save.svg"
                  alt="save"
                />
                <p className="font-[500] text-[#6F6F6F]">{favoriteCount}</p>
              </div>
            </div>
          </div>
          {/** 아이템 담기, 구매하러 가기 버튼 */}
          <ActionButtons itemUrl={itemUrl} itemId={itemInfo.id} />
        </div>
      </article>
      <Suspense fallback={<ReviewSectionSkeletonUI />}>
        <NoSSRRendering>
          <ReviewSection itemInfo={itemInfo} />
        </NoSSRRendering>
      </Suspense>
    </section>
  )
}
