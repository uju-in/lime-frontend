import { Suspense } from 'react'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import MoAddButton from '@/app/_components/layout/mobile/MoAddButton'
import MoSearchBar from '@/app/_components/layout/mobile/MoSearchBar'
import CategoryPicker from '../../../_components/categoryPicker/CategoryPicker'
import RankingList from './_component/RankingList'
import VoteList from './_component/VoteList'
import CreateVoteButton from './_component/CreateVoteButton'

export default function page() {
  return (
    <>
      <main className={cn('mx-auto w-[794px]', 'mo:w-full')}>
        <MoSearchBar path="투표" />
        <div className={cn('mt-[52px] flex justify-between', 'mo:mt-[21px]')}>
          <CategoryPicker path="votes" />
          <CreateVoteButton />
        </div>
        <Suspense fallback={<div>Loading. . . </div>}>
          <RankingList />
        </Suspense>
        <Suspense fallback={<div>Loading. . . </div>}>
          <VoteList />
        </Suspense>
      </main>
      <MoAddButton path="votes" />
      <MoNavbar />
    </>
  )
}
