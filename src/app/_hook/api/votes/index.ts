import { createQueryKeys } from '@lukemorales/query-key-factory'

export const voteKeys = createQueryKeys('votes', {
  detail: (voteId: number) => [voteId],
  favorites: (folderId: number) => [folderId],
  voteList: (hobby: string, sortOption: string) => [hobby, sortOption],
  voteRanking: (hobby: string) => [hobby],
  folderList: null,
})
