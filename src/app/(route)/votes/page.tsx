import { Suspense } from 'react'
import MenuButtons from './_component/MenuButtons'
import RankingList from './_component/RankingList'
import VoteList from './_component/VoteList'

export default function page() {
  return (
    <main className="mx-auto w-[794px]">
      <section className="mt-[52px]">
        <MenuButtons />
        <p className="mt-[69.5px]">
          <strong className="text-[26px] font-[700]">투표 랭킹</strong>
        </p>
        <Suspense fallback={<div>Loading. . . </div>}>
          <RankingList />
        </Suspense>
      </section>
      <Suspense fallback={<div>Loading. . . </div>}>
        <VoteList />
      </Suspense>
    </main>
  )
}
