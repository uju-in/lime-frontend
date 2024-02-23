import { createQueryKeys } from '@lukemorales/query-key-factory'

export const voteKeys = createQueryKeys('votes', {
  detail: (voteId: number) => [voteId],
  favorites: (folderId: number) => [folderId],
})

export const voteTags = {
  voteDetail: 'voteDetail' as const,
}
