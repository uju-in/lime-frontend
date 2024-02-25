const hobbyMap = new Map<string, string>([
  ['농구', '스포츠'],
  ['야구', '스포츠'],
  ['배드민턴', '스포츠'],
  ['헬스', '스포츠'],
  ['클라이밍', '스포츠'],
  ['드로잉', '라이프'],
  ['음악', '라이프'],
  ['쿠킹', '라이프'],
  ['게임', '라이프'],
  ['데스크테리어', '라이프'],
])

export function categoryFormatter(hobby: string): string {
  return hobbyMap.get(hobby) ?? '카테고리 없음'
}
