import ErrorFallback from '@/app/_components/errorFallback'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import Loading from '@/app/_components/loading'
import { cn } from '@/app/_utils/twMerge'
import VoteDetail from './_component/VoteDetail'

type Props = {
  params: { voteId: number }
}

export default function pages({ params }: Props) {
  const { voteId } = params

  return (
    <main className={cn('min-h-[900px] w-[720px]', ' mo:w-full')}>
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<Loading />}
      >
        <VoteDetail voteId={voteId} />
      </ErrorHandlingWrapper>
    </main>
  )
}
