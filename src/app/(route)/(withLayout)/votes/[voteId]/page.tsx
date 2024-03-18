import { Suspense } from 'react'
import VoteDetail from './_component/VoteDetail'
import MoDetailVoteHeader from './_component/MoDetailVoteHeader'

type Props = {
  params: { voteId: number }
}

export default function pages({ params }: Props) {
  const { voteId } = params

  return (
    <section className="w-full">
      <MoDetailVoteHeader />
      <Suspense fallback={<div>Loading. . . </div>}>
        <VoteDetail voteId={voteId} />
      </Suspense>
    </section>
  )
}
