import { SortOption } from '@/app/_types/review.type'
import { createQueryKeys } from '@lukemorales/query-key-factory'

export const reviewKeys = createQueryKeys('reviews', {
  reviewList: (itemId: number, sortOption: SortOption) => [itemId, sortOption],
})
