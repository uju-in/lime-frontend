'use client'

import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { ItemDetailType } from '@/app/_types/item.type'
import Breadcrumb from './Breadcrumb'
import ActionButtons from './ActionButtons'

interface PropsType {
  itemData: ItemDetailType
}

export default function ItemDetail({ itemData }: PropsType) {
  const { itemInfo, hobbyName, itemAvgRate, favoriteCount, itemUrl } = itemData

  return (
    <section className={cn('flex justify-between', 'mo:flex-col')}>
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
          <strong
            className={cn(
              'mt-[10px] text-[22px] font-[700]',
              'mo:mt-0 mo:text-[17px]',
            )}
          >
            {itemInfo.name}
          </strong>
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
              <p className="font-[500] text-[#6F6F6F]">{favoriteCount}</p>
            </div>
          </div>
        </div>
        {/** 아이템 담기, 구매하러 가기 버튼 */}
        <ActionButtons itemUrl={itemUrl} itemId={itemInfo.id} />
      </div>
    </section>
  )
}
