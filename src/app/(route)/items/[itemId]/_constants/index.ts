import { SortOption } from '@/app/_types/review.type'

export const sortOptions: { label: string; value: SortOption }[] = [
  { label: '최신순', value: 'NEWEST' },
  { label: '베스트순', value: 'LIKE_COUNT_DESC' },
]
