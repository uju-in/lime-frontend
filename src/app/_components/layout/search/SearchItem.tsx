import Link from 'next/link'

interface Props {
  itemId: number
  itemName: string
  inputKeyword: string
}

export function SearchItem({ itemId, itemName, inputKeyword }: Props) {
  const startAt = itemName.indexOf(inputKeyword)
  const endAt = startAt + inputKeyword.length

  const first = itemName.substring(0, startAt)
  const second = itemName.substring(startAt, endAt)
  const third = itemName.substring(endAt)

  if (startAt < 0) return <div className="text-[#535353]">{itemName}</div>

  return (
    <li className="text-[#535353]">
      <Link href={`/items/${itemId}`}>
        <span>{first}</span>
        <strong className="font-semibold text-black">{second}</strong>
        <span>{third}</span>
      </Link>
    </li>
  )
}
