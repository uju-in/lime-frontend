'use client'

import { useItemDetail } from '@/app/_hook/api/items/useItemDetail'
import { Suspense } from 'react'
import { cn } from '@/app/_utils/twMerge'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import ErrorBoundary from '@/app/_components/errorBoundary'
import ErrorFullback from '@/app/_components/errorFullback'
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
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFullback}>
            <Suspense fallback={<ReviewSectionSkeletonUI />}>
              <ReviewSection itemInfo={itemInfo} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  )
}
