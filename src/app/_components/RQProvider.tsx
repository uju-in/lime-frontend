'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense, lazy, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  })),
)

function RQProvider({ children }: Props) {
  const [showDevtools, setShowDevtools] = useState(false)

  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_MODE === 'local') {
      setShowDevtools(true)
    }
  }, [])

  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    }),
  )

  return (
    <QueryClientProvider client={client}>
      {children}
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  )
}

export default RQProvider
