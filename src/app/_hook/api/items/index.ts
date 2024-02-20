export const itemKeys = {
  all: ['items'] as const,
  itemList: (keyword: string, sortOptions: string) =>
    [...itemKeys.all, keyword, sortOptions] as const,
  detail: 'itemDetail' as const,
}
