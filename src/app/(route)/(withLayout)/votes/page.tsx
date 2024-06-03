import ErrorFallback from '@/app/_components/errorFallback'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import Loading from '@/app/_components/loading'
import { cn } from '@/app/_utils/twMerge'
import CategoryPicker from '../../../_components/categoryPicker/CategoryPicker'
import CreateVoteButton from './_component/CreateVoteButton'
import RankingList from './_component/RankingList'
import VoteList from './_component/VoteList'

export default function page() {
  return (
    <main className={cn('mx-auto w-[794px]', 'mo:w-full')}>
      <nav className={cn('mt-[52px] flex justify-between', 'mo:pt-[16px]')}>
        <CategoryPicker path="/votes" />
        <CreateVoteButton />
      </nav>
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<Loading />}
      >
        <RankingList />
        <VoteList />
      </ErrorHandlingWrapper>
    </main>
  )
}
