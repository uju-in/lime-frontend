import { Suspense } from 'react'
import { cn } from '@/app/_utils/twMerge'
import VoteDetail from './_component/VoteDetail'

type Props = {
  params: { voteId: number }
}

export default function pages({ params }: Props) {
  const { voteId } = params

  return (
    <section className={cn('mx-auto min-h-[900px] w-[720px]', ' mo:w-full')}>
      <Suspense fallback={<div>Loading. . . </div>}>
        <VoteDetail voteId={voteId} />
      </Suspense>
    </section>
  )
}
