import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import ErrorFallback from '@/app/_components/errorFallback'
import Loading from '@/app/_components/loading'
import VoteContentTabs from './VoteContentTabs'

export default function UserContentTabs() {
  return (
    <article className="mt-[46px] flex flex flex-col justify-center">
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<Loading />}
      >
        <VoteContentTabs />
      </ErrorHandlingWrapper>
    </article>
  )
}
