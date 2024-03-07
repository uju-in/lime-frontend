import Image from 'next/image'
import { truncateString } from '../../_utils/truncateString'

interface PropsType {
  onOpenModal: (itemType: 'item1' | 'item2') => void
  itemImageUrl: string
  itemTitle: string
  itemType: 'item1' | 'item2'
}

export default function ItemSelector(props: PropsType) {
  const { onOpenModal, itemImageUrl, itemTitle, itemType } = props
  return (
    <div className="w-[88px]">
      <button
        type="button"
        className="mb-[4px] flex h-[88px] w-[88px] items-center justify-center rounded-[6.729px] bg-[#EAEAEA]"
        onClick={() => onOpenModal(itemType)}
      >
        <Image
          width={itemImageUrl ? 88 : 33}
          height={itemImageUrl ? 88 : 33}
          src={itemImageUrl || '/image/icon/icon-plus.svg'}
          alt="upload image"
        />
      </button>
      <span className="text-[12px] text-[#515151]">
        {truncateString(itemTitle, 18)}
      </span>
    </div>
  )
}
