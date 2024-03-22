'use client'

import { useItemDetail } from '@/app/_hook/api/items/useItemDetail'
import { ItemDetailType } from '@/app/_types/review.type'
import Image from 'next/image'
import { Suspense } from 'react'
import { cn } from '@/app/_utils/twMerge'
import ActionButtons from './ActionButtons'
import ReviewSection from './ReviewSection'
import { ReviewSectionSkeletonUI } from './ReviewSkeletonUI'
import Breadcrumb from './Breadcrumb'

interface Props {
  itemId: number
}

export default function ItemDetailView(props: Props) {
  const { itemId } = props

  const { itemData, isError, isSuccess, isLoading } = useItemDetail(itemId)

  const { itemInfo, hobbyName, itemUrl, itemAvgRate, favoriteCount } =
    itemData as ItemDetailType

  if (isError) return <div>Error. . .</div>

  return (
    <article className={cn('mx-auto mt-[32px] w-[720px]', 'mo:w-full')}>
      <Breadcrumb hobbyName={hobbyName} innerClassNames="mo:hidden" />
      <section className={cn('flex justify-between', ' mo:flex-col')}>
        <div className="flex justify-center">
          <Image
            className={cn('rounded-[8px]', 'mo:hidden')}
            width={227}
            height={227}
            src={itemInfo.image}
            alt="grade"
          />
          <Image
            className={cn('hidden rounded-[8px]', 'mo:block')}
            width={375}
            height={375}
            src={itemInfo.image}
            alt="grade"
          />
        </div>
        <div
          className={cn(
            'flex w-[473px] flex-col justify-between',
            'mo:w-full mo:px-[16px]',
          )}
        >
          <div
            className={cn(
              'flex h-[165px] w-[473px] flex-col justify-between border-t-[3px] border-[#000]',
              'mo:w-full mo:border-0',
            )}
          >
            <div className={cn('hidden', 'mo:block')}>
              <Breadcrumb
                hobbyName={hobbyName}
                innerClassNames="mo:mt-[12px] mo:mb-0"
              />
            </div>
            <strong
              className={cn(
                'mt-[10px] text-[22px] font-[700]',
                'mo:mt-0 mo:text-[17px]',
              )}
            >
              {itemInfo.name}
            </strong>
            <div className="mb-[20px] flex w-full">
              <Image
                className="mr-1"
                width={14}
                height={14}
                src="/image/icon/icon-filled_star.svg"
                alt="grade"
              />
              <span className="line-clamp-2 text-[14px] font-[500] text-[#6F6F6F]">
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
      </section>
      <div
        className={cn('hidden h-[8px] bg-[#EEE]', 'mo:mt-[16px] mo:block')}
      />
      <Suspense fallback={<ReviewSectionSkeletonUI />}>
        <ReviewSection itemInfo={itemInfo} />
      </Suspense>
    </article>
  )
}
