import { cn } from '@/app/_utils/twMerge'
import VoteDetailPage from './_component/VoteDetailPage'

type Props = {
  params: { voteId: number }
}

export default function pages({ params }: Props) {
  const { voteId } = params

  return (
    <section className={cn('mx-auto min-h-[900px] w-[720px]', ' mo:w-full')}>
      <VoteDetailPage voteId={voteId} />
    </section>
  )
}
