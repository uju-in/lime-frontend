import { Suspense } from 'react'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import CategoryPicker from '../../../_components/categoryPicker/CategoryPicker'
import RankingList from './_component/RankingList'
import VoteList from './_component/VoteList'
import CreateVoteButton from './_component/CreateVoteButton'

export default function page() {
  return (
    <>
      <main className="mx-auto w-[794px]">
        <div className="mt-[52px] flex justify-between">
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
      <MoNavbar />
    </>
  )
}
