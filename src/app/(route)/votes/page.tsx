import { Suspense } from 'react'
import MenuButtons from './_component/MenuButtons'
import RankingList from './_component/RankingList'
import VoteList from './_component/VoteList'
import CreateVoteButton from './_component/CreateVoteButton'

export default function page() {
  return (
    <main className="mx-auto w-[794px]">
      <div className="mt-[52px] flex justify-between">
        <MenuButtons />
        <CreateVoteButton />
      </div>
      <Suspense fallback={<div>Loading. . . </div>}>
        <RankingList />
      </Suspense>
      <Suspense fallback={<div>Loading. . . </div>}>
        <VoteList />
      </Suspense>
    </main>
  )
}
