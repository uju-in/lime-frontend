export const voteKeys = {
  all: ['votes'] as const,
  list: () => [...voteKeys.all, 'list'] as const,
  detail: () => `${voteKeys.all}Detail` as const,
}
