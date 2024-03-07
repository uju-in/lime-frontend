import { fetchVotes } from '@/app/_hook/api/home/useGetVotes'
import VoteItem from '../(withLayout)/votes/_component/VoteItem'

export default async function VoteSection({
  hobby = '농구',
}: {
  hobby: string
}) {
  const voteData = await fetchVotes(hobby)

  const { votes } = voteData

  return (
    <div className="mt-[32px] flex gap-[15px]">
      {votes.map((item) => (
        <div key={item.cursorId} className="h-[332px] w-[290px]">
          <VoteItem item={item} path="/" />
        </div>
      ))}
    </div>
  )
}
