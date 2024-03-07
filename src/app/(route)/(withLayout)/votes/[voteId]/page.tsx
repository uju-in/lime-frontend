import { Suspense } from 'react'
import VoteDetail from './_component/VoteDetail'

type Props = {
  params: { voteId: number }
}

export default function pages({ params }: Props) {
  const { voteId } = params

  return (
    <Suspense fallback={<div>Loading. . . </div>}>
      <VoteDetail voteId={voteId} />
    </Suspense>
  )
}
