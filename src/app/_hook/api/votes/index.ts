import { createQueryKeys } from '@lukemorales/query-key-factory'

export const voteKeys = createQueryKeys('votes', {
  voteList: (hobby: string, sortOption: string) => [hobby, sortOption],
  voteRanking: (hobby: string) => [hobby],
})

export const voteTags = {
  voteDetail: 'voteDetail' as const,
}
