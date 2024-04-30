'use client'

import StarRating from '@/app/(route)/(withLayout)/items/[itemId]/_component/StarRating'
import { MemberInfo, ReviewInfo } from '@/app/_types/review.type'
import { dateFormatter } from '@/app/_utils/dateFormatter'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PropsType {
  memberInfo: MemberInfo
  reviewSummary: ReviewInfo
}

export default function UserProfile({ memberInfo, reviewSummary }: PropsType) {
  const router = useRouter()

  const handleViewProfile = (
    e: React.MouseEvent<HTMLImageElement | HTMLParagraphElement>,
  ) => {
    e.stopPropagation()

    router.push(`/mypage?nickname=${memberInfo.nickname}`)
  }

  return (
    <div className="flex">
      <Image
        width={40}
        height={40}
        src={memberInfo.profileImage}
        alt="member profile"
        className="mr-[8px] h-[40px] w-[40px] cursor-pointer rounded-full"
        onClick={handleViewProfile}
      />
      <div>
        <div className="flex items-center">
          <p
            className="mr-[4.52px] cursor-pointer text-[12px] font-[700] "
            onClick={handleViewProfile}
          >
            {memberInfo.nickname}
          </p>
          <div className="flex h-[13px] w-[27px] justify-center rounded-[4px] bg-[#000]">
            <p className="text-[8px] font-[700] text-white">
              Lv. {memberInfo.level}
            </p>
          </div>
        </div>
        <div className="mt-[4px] flex">
          {/** 리뷰 별점 */}
          <StarRating rate={reviewSummary.rate} />
          <div className="mx-[10px] h-[12px] border-l-[0.5px] border-[#B3B3B3] " />
          <p className="flex items-center text-[10px] font-[500] text-[#747474]">
            {dateFormatter(reviewSummary.createdAt)}
          </p>
        </div>
      </div>
    </div>
  )
}
