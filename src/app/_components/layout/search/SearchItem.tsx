import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import { searchViewState } from '@/app/_atoms/searchViewState'

interface Props {
  itemId: number
  itemName: string
  inputKeyword: string
}

export function SearchItem({ itemId, itemName, inputKeyword }: Props) {
  const router = useRouter()
  const setIsSearchView = useSetRecoilState(searchViewState)

  const startAt = itemName.indexOf(inputKeyword) // strong text startAt
  const endAt = startAt + inputKeyword.length // strong text endAt

  const first = itemName.substring(0, startAt)
  const second = itemName.substring(startAt, endAt) // strong text
  const third = itemName.substring(endAt)

  if (startAt < 0) return <div className="text-[#535353]">{itemName}</div>

  return (
    <li className="text-[#535353]">
      <button
        type="button"
        onClick={() => {
          router.push(`/items/${itemId}`)
          setIsSearchView(false)
        }}
      >
        <span>{first}</span>
        <strong className="font-semibold text-black">{second}</strong>
        <span>{third}</span>
      </button>
    </li>
  )
}
