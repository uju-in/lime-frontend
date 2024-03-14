import { fetchItems } from '@/app/_hook/api/home/useGetItems'
import { cn } from '@/app/_utils/twMerge'
import Item from '../(withLayout)/items/_components/Item'

export default async function ItemSection({
  hobby = '농구',
}: {
  hobby: string
}) {
  const itemData = await fetchItems(hobby)

  const { items } = itemData

  return (
    <div
      className={cn(
        'mt-[32px] grid grid-cols-[repeat(auto-fill,184px)] gap-[17px]',
        'mo:grid-cols-3',
      )}
    >
      {items.map((item) => (
        <div
          key={item.cursorId}
          className={cn('h-[290px] w-[184px]', 'mo:w-full')}
        >
          <Item item={item} />
        </div>
      ))}
    </div>
  )
}
