'use client'

import { itemDataState } from '@/app/_atoms/itemDataState'
import { useItemDetail } from '@/app/_hook/api/items/queries/useItemDetail'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import ActionButtons from './ActionButtons'
import Breadcrumb from './Breadcrumb'

interface PropsType {
  itemId: number
}

export default function ItemDetailSection({ itemId }: PropsType) {
  const setItemData = useSetRecoilState(itemDataState)

  /** 아이템 정보 저장 (for add review) */
  const { itemData } = useItemDetail(itemId)

  useEffect(() => {
    setItemData(itemData.itemInfo)
  }, [itemData, setItemData])

  const { itemInfo, hobbyName, itemAvgRate, favoriteCount, itemUrl } = itemData

  return (
    <section>
      <Breadcrumb hobbyName={hobbyName} innerClassNames="mo:hidden" />
      <article className={cn('flex justify-between', 'mo:flex-col')}>
        <div className="flex justify-center">
          <Image
            className={cn('rounded-[8px]', 'mo:hidden')}
            width={227}
            height={227}
            src={itemInfo.image}
            alt="grade"
            loading="eager"
          />
          <Image
            className={cn('hidden rounded-[8px]', 'mo:block')}
            width={375}
            height={375}
            src={itemInfo.image}
            alt="grade"
            loading="eager"
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
            <h1
              className={cn(
                'mt-[10px] text-[22px] font-[700]',
                'mo:mt-0 mo:text-[17px]',
              )}
            >
              {itemInfo.name}
            </h1>
            {/** 평점 */}
            <div className="flex w-full">
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
                <span className="font-[500] text-[#6F6F6F]">
                  {favoriteCount}
                </span>
              </div>
            </div>
          </div>
          {/** 아이템 담기, 구매하러 가기 버튼 */}
          <ActionButtons itemUrl={itemUrl} itemId={itemInfo.id} />
        </div>
      </article>
    </section>
  )
}
