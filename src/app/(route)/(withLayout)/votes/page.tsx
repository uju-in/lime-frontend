import { Suspense } from 'react'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import MoAddButton from '@/app/_components/layout/mobile/MoAddButton'
import CategoryPicker from '../../../_components/categoryPicker/CategoryPicker'
import RankingList from './_component/RankingList'
import VoteList from './_component/VoteList'
import CreateVoteButton from './_component/CreateVoteButton'
import MoVoteHeader from './_component/MoVoteHeader'

export default function page() {
  return (
    <>
      <main className={cn('mx-auto h-dvh w-[794px]', 'mo:w-full')}>
        <MoVoteHeader />
        <div className={cn('mt-[52px] flex justify-between', 'mo:pt-[16px]')}>
          <CategoryPicker path="votes" />
          <CreateVoteButton />
        </div>
        <Suspense fallback={<div>Loading. . . </div>}>
          <RankingList />
          <VoteList />
        </Suspense>
      </main>
      <MoAddButton path="votes/add-vote" />
      <MoNavbar />
    </>
  )
}
