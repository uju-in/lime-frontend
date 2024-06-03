'use client'

import { ItemInfoType } from '@/app/_types/detailVote.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { truncateString } from '../../_utils/truncateString'

interface PropsType {
  itemId: number | null
  voteItemInfo: ItemInfoType
  onSelectItem: (selectItemId: number) => void
}

export default function VoteItemCard(props: PropsType) {
  const { itemId, voteItemInfo, onSelectItem } = props
  const { id, image, name, price } = voteItemInfo
  const router = useRouter()

  return (
    <article
      className={cn(
        'relative',
        'mo:flex:1 border-black mo:rounded-[6px] mo:border-[2px]',
        {
          'border-[3px]': id === itemId,
        },
      )}
      onClick={() => onSelectItem(id)}
    >
      <Image
        width={196}
        height={196}
        src={image}
        alt="item1 image"
        className="mo:rounded-[6px]"
        loading="eager"
        priority
      />
      <div
        className={cn(
          'absolute bottom-[1px] h-[175px] w-[196px] rounded-[20px] bg-[#fff] px-[28px] pt-[15px] text-center',
          'mo:w-full',
          {
            'mo:bottom-[-1px] mo:rounded-[6px] mo:bg-black mo:text-white':
              id === itemId,
          },
        )}
      >
        <strong className="mb-[15.4px] h-[65px] text-center text-[14px] font-[500]">
          <strong>{truncateString(name, 35)}</strong>
        </strong>
        <strong className="text-[14px] font-[700]">
          {price.toLocaleString()}원
        </strong>
        <div className="mt-[21.39px] flex justify-center">
          <button
            type="button"
            className={cn(
              'flex h-[24px] w-[80px] items-center justify-center rounded-[100px] border-[0.385px] border-[#000]',
              {
                'bg-white text-black': id === itemId,
              },
            )}
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
    </article>
  )
}
