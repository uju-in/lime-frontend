'use client'

import useReviewLikeAction from '@/app/_hook/api/reviews/mutations/useReviewLikeAction'
import { SortOption } from '@/app/_types/review.type'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

interface PropsType {
  reviewId: number
  isLiked: boolean
  likeCount: number
  itemId: number
  sortOption: SortOption
  showReviewDetail: number | null
  innerClassNames?: string
}

export default function ReviewLikeButton(props: PropsType) {
  const {
    reviewId,
    isLiked,
    likeCount,
    showReviewDetail,
    innerClassNames,
    sortOption,
    itemId,
  } = props
  const { mutateAsync: likeAction } = useReviewLikeAction()

  const handleLikeClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()

    await likeAction({
      reviewId,
      isLiked,
      itemId,
      sortOption,
    })
  }

  return (
    <button
      type="button"
      className={cn(
        'ml-[38px] mt-[8px] flex h-[30px] w-[50px] items-center justify-center rounded-[100px]',
        'mo:border mo:border-[#D1D1D1]',
        {
          'bg-[#000] text-[#fff]': isLiked,
          'text-[#6F6F6F]': !isLiked,
          'border border-[#D1D1D1]': showReviewDetail,
        },
        innerClassNames,
      )}
      onClick={handleLikeClick}
    >
      <Image
        src={
          isLiked
            ? '/image/icon/icon-like_border_white.svg'
            : '/image/icon/icon-like.svg'
        }
        alt="recommend"
        width={14}
        height={14}
        className="cursor-pointer"
      />
      <span className="ml-[4px] text-[14px] font-[600]">{likeCount}</span>
    </button>
  )
}
