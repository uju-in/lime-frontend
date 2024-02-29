import { Suspense } from 'react'
import { getCookie } from '@/app/_utils/cookie'
import VoteDetail from './_component/VoteDetail'

type Props = {
  params: { voteId: number }
}

export default function pages({ params }: Props) {
  const { voteId } = params

  const accessToken = getCookie('accessToken')

  return (
    <Suspense fallback={<div>Loading. . . </div>}>
      <VoteDetail voteId={voteId} accessToken={accessToken} />
    </Suspense>
  )
}
