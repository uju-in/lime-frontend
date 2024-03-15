import { fetchVotes } from '@/app/_hook/api/home/useGetVotes'
import { cn } from '@/app/_utils/twMerge'
import VoteItem from '../votes/_component/VoteItem'
import NoResults from './NoResults'

export default async function VoteSection({
  hobby = '농구',
}: {
  hobby: string
}) {
  const voteData = await fetchVotes(hobby)

  const { votes } = voteData

  if (votes.length === 0) {
    return <NoResults sectionName="투표" />
  }

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
          className={cn('h-[332px] w-[290px]', 'mo:w-full')}
        >
          <VoteItem item={item} width={128} height={156} path="/" />
        </div>
      ))}
    </div>
  )
}
