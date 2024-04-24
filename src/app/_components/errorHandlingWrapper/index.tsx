'use client'

import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import ErrorBoundary from '../errorBoundary'
import ErrorFallback from '../errorFallback'
import Loading from '../loading'

export default function ErrorHandlingWrapper({ children }: any) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
