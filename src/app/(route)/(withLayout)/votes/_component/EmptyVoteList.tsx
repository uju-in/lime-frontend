'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function EmptyVoteList() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center gap-[29px] py-[96px]">
      <strong className="text-[20px] font-[500]">등록한 투표가 없어요.</strong>
      <button
        type="button"
        className="flex items-center gap-[6px]"
        onClick={() => router.push('/votes/add-vote')}
      >
        <Image
          width={15}
          height={15}
          src="/image/icon/icon-plus_858585.svg"
          alt="add vote"
        />
        <span className="font-[600] text-[#858585]">투표 생성하러 가기</span>
      </button>
    </div>
  )
}
