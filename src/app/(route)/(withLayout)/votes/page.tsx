import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import MoAddButton from '@/app/_components/layout/mobile/MoAddButton'
import CategoryPicker from '../../../_components/categoryPicker/CategoryPicker'
import CreateVoteButton from './_component/CreateVoteButton'
import MoVoteHeader from './_component/MoVoteHeader'
import VoteListPage from './_component/VoteListPage'

export default function page() {
  return (
    <>
      <main className={cn('mx-auto h-auto h-full w-[794px]', 'mo:w-full')}>
        <MoVoteHeader />
        <section
          className={cn('mt-[52px] flex justify-between', 'mo:pt-[16px]')}
        >
          <CategoryPicker path="votes" />
          <CreateVoteButton />
        </section>
        <VoteListPage />
      </main>
      <MoAddButton path="votes/add-vote" />
      <MoNavbar />
    </>
  )
}
