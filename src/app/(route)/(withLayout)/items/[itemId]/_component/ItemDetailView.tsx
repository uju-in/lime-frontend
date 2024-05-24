'use client'

import ErrorFallback from '@/app/_components/errorFallback'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import { useItemDetail } from '@/app/_hook/api/items/queries/useItemDetail'
import { cn } from '@/app/_utils/twMerge'
import Breadcrumb from './Breadcrumb'
import ItemDetail from './ItemDetail'
import ReviewSection from './ReviewSection'
import { ReviewSectionSkeletonUI } from './ReviewSkeletonUI'

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
