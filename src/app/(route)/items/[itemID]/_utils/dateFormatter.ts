/** 'YYYY.MM.DD' 형식으로 변환 */

export function dateFormatter(dateString: string): string {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(date)
    .replace(/\./g, '')
    .replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')
}
