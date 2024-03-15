import { SectionNameType } from '@/app/_types/home.type'
import Image from 'next/image'
import Link from 'next/link'
import { getSectionPath } from '../../_utils/getSectionPath'

export default function NoResults({
  sectionName,
}: {
  sectionName: SectionNameType
}) {
  const message =
    sectionName === '아이템'
      ? '등록된 아이템이 없어요'
      : `등록된 ${sectionName}가 없어요`

  const pathSuffix = sectionName === '투표' ? 'vote' : 'item'
  const href = `${getSectionPath(sectionName)}/add-${pathSuffix}`

  return (
    <div className="flex h-[290px] items-center justify-center">
      <div className="flex flex-col gap-[29px]">
        <strong className="text-[20px] font-[500]">{message}</strong>
        <Link href={href}>
          <p className="flex cursor-pointer justify-center gap-[6px]">
            <Image
              src="/image/icon/icon-plus_858585.svg"
              alt="add"
              width={15}
              height={15}
            />
            <span className="font-[600] text-[#858585]">
              {sectionName} 생성하러 가기
            </span>
          </p>
        </Link>
      </div>
    </div>
  )
}
