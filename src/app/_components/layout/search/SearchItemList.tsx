import useSearchItem from '@/app/_hook/api/items/queries/useSearchItem'
import useDebounceValue from '@/app/_hook/common/useDebounce'
import { SearchItemType } from '@/app/_types/searchItem.type'
import { cn } from '@/app/_utils/twMerge'
import { SearchItem } from './SearchItem'

export function SearchItemList({ inputKeyword }: { inputKeyword: string }) {
  const debouncedKeyword = useDebounceValue(inputKeyword)
  const { data, isLoading, isError } = useSearchItem(debouncedKeyword)

  if (isLoading || isError) return null

  return (
    <ul
      className={cn(
        'flex flex-col gap-[12px] text-[12px] text-[#535353]',
        'mo:gap-0',
      )}
    >
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
