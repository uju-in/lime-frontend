'use client'

import ErrorBoundary from '@/app/_components/errorBoundary'
import ErrorFullback from '@/app/_components/errorFullback'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import Loading from '@/app/_components/loading'
import RankingList from './RankingList'
import VoteList from './VoteList'

export default function VotingDashboard() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFullback}>
          <Suspense fallback={<Loading />}>
            <RankingList />
            <VoteList />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
