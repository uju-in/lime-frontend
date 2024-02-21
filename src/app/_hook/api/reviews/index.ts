export const reviewKeys = {
  all: 'review' as const,
  reviewList: () => [reviewKeys.all, 'list'] as const,
}
