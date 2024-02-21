export const itemKeys = {
  all: ['items'] as const,
  list: () => [...itemKeys.all, 'list'] as const,
  detail: () => `${itemKeys.all}Detail` as const,
}
