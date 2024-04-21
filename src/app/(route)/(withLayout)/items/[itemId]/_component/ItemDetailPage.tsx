'use client'

import ErrorBoundary from '@/app/_components/errorBoundary'
import Loading from '@/app/_components/loading'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import ErrorFullback from '@/app/_components/errorFullback'
import ItemDetailView from './ItemDetailView'

export default function ItemDetailPage({ itemId }: { itemId: number }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFullback}>
          <Suspense fallback={<Loading />}>
            <ItemDetailView itemId={itemId} />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
