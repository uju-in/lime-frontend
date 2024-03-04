import { createQueryKeys } from '@lukemorales/query-key-factory'

export const itemKeys = createQueryKeys('items', {
  itemList: (hobbyName: string, keyword: string, sortOption: string) => [
    hobbyName,
    keyword,
    sortOption,
  ],
  itemDetail: (itemId: number) => [itemId],
})
