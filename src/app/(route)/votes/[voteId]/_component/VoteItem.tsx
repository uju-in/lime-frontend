'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ItemInfoType } from '@/app/_types/detailVote.type'
import { cn } from '@/app/_utils/twMerge'
import { truncateString } from '../../_utils/truncateString'

interface PropsType {
  itemId: number | null
  voteItemInfo: ItemInfoType
  onSelectItem: (selectItemId: number) => void
}

export default function VoteItem(props: PropsType) {
  const { itemId, voteItemInfo, onSelectItem } = props
  const { id, image, name, price } = voteItemInfo
  const router = useRouter()

  return (
    <div
      className={cn('relative', {
        'border-[3px] border-[#000]': id === itemId,
      })}
      onClick={() => onSelectItem(id)}
    >
      <Image width={196} height={196} src={image} alt="item1 image" />
      <div className="absolute bottom-[1px] h-[175px] w-[196px] rounded-[20px] bg-[#fff] px-[28px] pt-[15px] text-center">
        <p className="mb-[15.4px] h-[65px] text-center text-[14px] font-[500]">
          <strong>{truncateString(name, 35)}</strong>
        </p>
        <strong className="text-[14px] font-[700]">
          {price.toLocaleString()}원
        </strong>
        <div className="mt-[21.39px] flex justify-center">
          <button
            type="button"
            className="flex h-[24px] w-[80px] items-center justify-center rounded-[100px] border-[0.385px] border-[#000] px-[11.8px]"
            onClick={() => router.push(`/items/${id}`)}
          >
            <span className="mr-[1.54px] text-[10px] font-[500]">
              상세 보기
            </span>
            <Image
              width={10.322}
              height={10.322}
              src="/image/icon/icon-arrow_long_right.svg"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
