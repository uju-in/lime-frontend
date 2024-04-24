import { cn } from '@/app/_utils/twMerge'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import ErrorFallback from '@/app/_components/errorFallback'
import Loading from '@/app/_components/loading'
import VoteDetail from './_component/VoteDetail'

type Props = {
  params: { voteId: number }
}

export default function pages({ params }: Props) {
  const { voteId } = params

  return (
    <section className={cn('mx-auto min-h-[900px] w-[720px]', ' mo:w-full')}>
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<Loading />}
      >
        <VoteDetail voteId={voteId} />
      </ErrorHandlingWrapper>
    </section>
  )
}
