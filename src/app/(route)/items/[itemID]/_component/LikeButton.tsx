'use client'

/** 리뷰 좋아요 */

import React from 'react'
import Image from 'next/image'

import useReviewLikeAction from '@/app/_hook/api/useReviewLikeAction'

interface PropsType {
  itemId: number
  reviewId: number
  isLiked: boolean
}

export default function LikeButton(props: PropsType) {
  const { itemId, reviewId, isLiked } = props

  const { mutateAsync: likeAction } = useReviewLikeAction()

  const handleLikeClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()

    await likeAction({ itemId, reviewId, isLiked })
  }

  return (
    <Image
      src={`${
        isLiked
          ? '/image/icon/icon-like_border_white.svg'
          : '/image/icon/icon-like.svg'
      }`}
      alt="recommend"
      width={14}
      height={14}
      className="cursor-pointer"
      onClick={handleLikeClick}
    />
  )
}
