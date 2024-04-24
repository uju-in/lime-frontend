'use client'

import { useItemDetail } from '@/app/_hook/api/items/useItemDetail'
import { cn } from '@/app/_utils/twMerge'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import ErrorFallback from '@/app/_components/errorFallback'
import ReviewSection from './ReviewSection'
import { ReviewSectionSkeletonUI } from './ReviewSkeletonUI'
import Breadcrumb from './Breadcrumb'
import ItemDetail from './ItemDetail'

interface Props {
  itemId: number
}

export default function ItemDetailView(props: Props) {
  const { itemId } = props

  const { itemData } = useItemDetail(itemId)

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
