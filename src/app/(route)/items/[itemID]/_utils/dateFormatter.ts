/** 'YYYY.MM.DD' 형식으로 변환 */

export function dateFormatter(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getFullYear()
  let month: string = (date.getMonth() + 1).toString()
  let day: string = date.getDate().toString()

  month = month.length < 2 ? `0${month}` : month
  day = day.length < 2 ? `0${day}` : day

  return `${year}.${month}.${day}`
}
