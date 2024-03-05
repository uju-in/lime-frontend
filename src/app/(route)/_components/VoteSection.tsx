import { fetchVotes } from '@/app/_hook/api/home/useGetVots'

export default async function VoteSection({
  hobby = '농구',
}: {
  hobby: string
}) {
  const voteData = await fetchVotes(hobby)

  const { votes } = voteData

  console.log(voteData)

  return <div className="mt-[32px] flex justify-center gap-[15px]" />
}
