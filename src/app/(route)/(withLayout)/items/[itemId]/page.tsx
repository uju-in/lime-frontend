import ErrorFallback from '@/app/_components/errorFallback'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import Loading from '@/app/_components/loading'
import { cn } from '@/app/_utils/twMerge'
import { Suspense } from 'react'
import ItemDetailSection from './_component/ItemDetailSection'
import ItemDetailSkeleton from './_component/ItemDetailSkeleton'
import ReviewSection from './_component/ReviewSection'
import { ReviewSectionSkeletonUI } from './_component/ReviewSkeletonUI'

type PropsType = {
  params: { itemId: number }
}

export default function DetailPage({ params }: PropsType) {
  const { itemId } = params

  return (
    <main
      className={cn('mx-auto mt-[32px] min-h-[650px] w-[720px]', 'mo:w-full')}
    >
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<Loading />}
      >
        <Suspense fallback={<ItemDetailSkeleton />}>
          <ItemDetailSection itemId={itemId} />
        </Suspense>
        <div
          className={cn('hidden h-[8px] bg-[#EEE]', 'mo:mt-[16px] mo:block')}
        />
        <Suspense fallback={<ReviewSectionSkeletonUI />}>
          <ReviewSection itemId={itemId} />
        </Suspense>
      </ErrorHandlingWrapper>
    </main>
  )
}
