import { SortOption } from '@/app/_types/review.type'

export const reviewKeys = {
  all: ['review'] as const,
  reviewList: (itemId: number, sortOption: SortOption) =>
    [...reviewKeys.all, itemId, sortOption] as const,
}
