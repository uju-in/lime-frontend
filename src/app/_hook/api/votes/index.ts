import { createQueryKeys } from '@lukemorales/query-key-factory'

export const voteKeys = createQueryKeys('votes', {
  detail: (voteId: number) => [voteId],
})

export const voteTags = {
  voteDetail: 'voteDetail' as const,
}
