'use client'

import { useVoteDetail } from '@/app/_hook/api/votes/useVoteDetail'
import VoteInfo from './VoteInfo'
import VoteItemInfo from './VoteItemInfo'

export default function VoteDetail({ voteId }: { voteId: number }) {
  const { voteData } = useVoteDetail(voteId)

  return (
    <>
      <VoteInfo voteData={voteData} />
      <VoteItemInfo voteData={voteData} />
    </>
  )
}
