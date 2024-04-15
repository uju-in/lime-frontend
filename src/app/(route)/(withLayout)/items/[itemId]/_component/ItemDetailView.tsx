'use client'

import { useItemDetail } from '@/app/_hook/api/items/useItemDetail'
import { Suspense } from 'react'
import { cn } from '@/app/_utils/twMerge'
import ReviewSection from './ReviewSection'
import { ReviewSectionSkeletonUI } from './ReviewSkeletonUI'
import Breadcrumb from './Breadcrumb'
import ItemDetail from './ItemDetail'

interface Props {
  itemId: number
}

export default function ItemDetailView(props: Props) {
  const { itemId } = props

  const { itemData, isError } = useItemDetail(itemId)

  const { itemInfo, hobbyName } = itemData

  if (isError) return <div>Error. . .</div>

  return (
    <>
      <Breadcrumb hobbyName={hobbyName} innerClassNames="mo:hidden" />
      <ItemDetail itemData={itemData} />
      <div
        className={cn('hidden h-[8px] bg-[#EEE]', 'mo:mt-[16px] mo:block')}
      />
      <Suspense fallback={<ReviewSectionSkeletonUI />}>
        <ReviewSection itemInfo={itemInfo} />
      </Suspense>
    </>
  )
}
