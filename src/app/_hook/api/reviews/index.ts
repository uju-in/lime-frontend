export const reviewKeys = {
  all: ['review'] as const,
  list: () => [...reviewKeys.all, 'list'] as const,
}
