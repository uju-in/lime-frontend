'use client'

import ErrorBoundary from '@/app/_components/errorBoundary'
import ErrorFullback from '@/app/_components/errorFullback'
import Loading from '@/app/_components/loading'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import VoteDetail from './VoteDetail'

export default function VoteDetailPage({ voteId }: { voteId: number }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFullback}>
          <Suspense fallback={<Loading />}>
            <VoteDetail voteId={voteId} />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
