const defaultHobbyMap = new Map<string, string>([
  ['스포츠', '농구'],
  ['라이프', '드로잉'],
])

export function defaultCategory(title: string): string {
  return defaultHobbyMap.get(title) || '카테고리 없음'
}
