import React, { Suspense } from 'react'
import Image from 'next/image'

import { fetchItemDetail } from '@/app/_hook/api/items/useItemDetail'
import { getCookie } from '@/app/_utils/cookie'
import { categoryFormatter } from '../../../_utils/categoryFormatter'

import ActionButtons from './_component/ActionButtons'
import { ReviewSectionSkeletonUI } from './_component/ReviewSkeletonUI'
import ReviewSection from './_component/ReviewSection'

type Props = {
  params: { itemId: number }
}

export default async function DetailPage({ params }: Props) {
  const { itemId } = params

  const itemData = await fetchItemDetail(itemId)

  const accessToken = getCookie('accessToken')

  const { itemInfo, hobbyName, itemUrl, itemAvgRate, favoriteCount } = itemData

  return (
    <section className="mx-auto mt-[32px] w-[720px]">
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
        <div className="flex w-[473px] flex-col justify-between">
          <div className="flex h-[165px] w-[473px] flex-col justify-between border-t-[3px] border-[#000]">
            <strong className="mt-[10px] text-[22px] font-[700]">
              {itemInfo.name}
            </strong>
            <div className="mb-[20px] flex">
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
            <div className=" flex justify-between">
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
        <ReviewSection itemInfo={itemInfo} accessToken={accessToken} />
      </Suspense>
    </section>
  )
}
