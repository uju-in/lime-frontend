import { createQueryKeys } from '@lukemorales/query-key-factory'

export const itemKeys = createQueryKeys('items', {
  itemList: (keyword: string, sortOption: string) => [keyword, sortOption],
})

export const itemTags = {
  itemDetail: 'itemDetail' as const,
}
