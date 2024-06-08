'use client'

import ErrorFallback from '@/app/_components/errorFallback'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import { useItemDetail } from '@/app/_hook/api/items/queries/useItemDetail'
import { SortOption } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'
import { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import ItemDetail from './ItemDetailSection'
import ReviewSection from './ReviewSection'
import { ReviewSectionSkeletonUI } from './ReviewSkeletonUI'

interface PropsType {
  itemId: number
}

export default function ItemDetailView({ itemId }: PropsType) {
  const { itemData } = useItemDetail(itemId)

  const [sortOption, setSortOption] = useState<SortOption>('NEWEST')

  const { itemInfo, hobbyName } = itemData

  return (
    <>
      <Breadcrumb hobbyName={hobbyName} innerClassNames="mo:hidden" />
      <ItemDetail itemData={itemData} />
      <div
        className={cn('hidden h-[8px] bg-[#EEE]', 'mo:mt-[16px] mo:block')}
      />
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<ReviewSectionSkeletonUI />}
      >
        <ReviewSection itemInfo={itemInfo} />
      </ErrorHandlingWrapper>
    </>
  )
}
