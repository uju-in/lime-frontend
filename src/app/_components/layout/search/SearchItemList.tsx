import useSearchItem from '@/app/_hook/api/items/useSearchItem'
import { SearchItemType } from '@/app/_types/searchItem.type'
import { SearchItem } from './SearchItem'

export function SearchItemList({ inputKeyword }: { inputKeyword: string }) {
  const { data, isLoading, isError } = useSearchItem(inputKeyword)

  if (isLoading || isError) return null

  return (
    <ul className="flex flex-col gap-[12px] text-[12px] text-[#535353]">
      {data.itemNameGetResults.map(({ itemId, itemName }: SearchItemType) => {
        return (
          <SearchItem
            key={itemId}
            itemId={itemId}
            itemName={itemName}
            inputKeyword={inputKeyword}
          />
        )
      })}
    </ul>
  )
}
