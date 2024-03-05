import { createQueryKeys } from '@lukemorales/query-key-factory'

export const itemKeys = createQueryKeys('items', {
  itemList: (hobbyName: string, sortOption: string, keyword: string) => [
    hobbyName,
    sortOption,
    keyword,
  ],
  searchList: (keyword: string) => [keyword],
  itemDetail: (itemId: number) => [itemId],
})
