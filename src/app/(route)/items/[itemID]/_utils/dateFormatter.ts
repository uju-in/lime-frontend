export function dateFormatter(dateString: string): string {
  const date = new Date(dateString)

  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)

  return formattedDate
    .replace(/(\d{4})\. (\d{2})\. (\d{2})\./, '$1.$2.$3')
    .trim()
}
