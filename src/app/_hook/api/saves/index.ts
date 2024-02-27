import { createQueryKeys } from '@lukemorales/query-key-factory'

export const saveKeys = createQueryKeys('saves', {
  saveList: (folderId: number, type: 'all' | 'item' | 'folder') => [
    folderId,
    type,
  ],
})
