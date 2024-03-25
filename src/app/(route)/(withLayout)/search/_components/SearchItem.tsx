import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ItemType } from '@/app/_types/item.type'

export function SearchItem({ item }: { item: ItemType }) {
  const { name, price, id, image, createdAt, favoriteCount, reviewCount } =
    item.itemSummary
  const router = useRouter()

  const handleItemClick = () => {
    router.push(`/items/${id}`)
  }

  return (
    <div className="flex flex-col gap-[7px] text-[14px]">
      <Image
        onClick={handleItemClick}
        className="cursor-pointer rounded-[8px]"
        src={image}
        alt="item-image"
        width={184}
        height={184}
      />
      <div
        onClick={handleItemClick}
        className="line-clamp-2 h-[42px] cursor-pointer text-[#515151] hover:underline"
      >
        {name}
      </div>
      <strong>{price.toLocaleString()}원</strong>
      <div className="flex gap-[20px] text-[13px] text-[#6F6F6F]">
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-save.svg"
            alt="save"
            width={18}
            height={18}
          />
          <div>{favoriteCount}</div>
        </div>
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-review.svg"
            alt="review"
            width={18}
            height={18}
          />
          <div>{reviewCount}</div>
        </div>
      </div>
    </div>
  )
}
