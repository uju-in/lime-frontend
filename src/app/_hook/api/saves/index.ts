import { createQueryKeys } from '@lukemorales/query-key-factory'

export const saveKeys = createQueryKeys('saves', {
  detail: (folderId: number) => [folderId],
})
