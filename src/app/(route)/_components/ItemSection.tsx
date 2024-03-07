import { fetchItems } from '@/app/_hook/api/home/useGetItems'
import Item from '../(withLayout)/items/_components/Item'

export default async function ItemSection({
  hobby = '농구',
}: {
  hobby: string
}) {
  const itemData = await fetchItems(hobby)

  const { items } = itemData

  return (
    <div className="mt-[32px] flex gap-[19px]">
      {items.map((item) => (
        <Item key={item.cursorId} item={item} />
      ))}
    </div>
  )
}
