import { fetchVotes } from '@/app/_hook/api/home/useGetVotes'
import { cn } from '@/app/_utils/twMerge'
import VoteItem from '../votes/_component/VoteItem'

export default async function VoteSection({
  hobby = '농구',
}: {
  hobby: string
}) {
  const voteData = await fetchVotes(hobby)

  const { votes } = voteData

  return (
    <div
      className={cn(
        'mt-[32px] grid grid-cols-[repeat(auto-fill,290px)] gap-[8px]',
        'mo:max-h-[680px] mo:grid-cols-1 mo:overflow-hidden',
      )}
    >
      {votes.map((item) => (
        <div
          key={item.cursorId}
          className={cn('h-[332px] w-[290px]', 'w-full')}
        >
          <VoteItem item={item} path="/" />
        </div>
      ))}
    </div>
  )
}
