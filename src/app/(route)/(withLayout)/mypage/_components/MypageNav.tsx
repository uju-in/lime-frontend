import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'
import { SideMenu } from '../_constants/mypageSideMenu'

export default function MypageNav({ menu = 'MY투표' }: { menu: string }) {
  return (
    <nav>
      <ul className="flex flex-col gap-[12px]">
        {/** 기능 구현 시 제거 예정 */}
        <li className="flex w-full items-center gap-[16px] rounded-[4px] p-[12px_25px] text-[18px] font-semibold">
          <Image
            src="/image/icon/icon-inventory.svg"
            alt="icon"
            width={36}
            height={36}
          />
          <span>인벤토리</span>
          <div className="ml-[96px] rounded-[100px] bg-[#838383] px-[10px] py-[6px] text-[14px] font-[600] text-white">
            개발중
          </div>
        </li>
        <li className="flex w-full items-center gap-[16px] rounded-[4px] p-[12px_25px] text-[18px] font-semibold">
          <Image
            src="/image/icon/icon-feed.svg"
            alt="icon"
            width={36}
            height={36}
          />
          <span>MY피드</span>
          <div className="ml-[96px] rounded-[100px] bg-[#838383] px-[10px] py-[6px] text-[14px] font-[600] text-white">
            개발중
          </div>
        </li>

        {SideMenu.map(({ label, id }) => (
          <Link key={id} href={`/mypage?menu=${label}`}>
            <li
              className={cn(
                'flex w-full items-center gap-[16px] rounded-[4px] p-[12px_25px] text-[18px] font-semibold',
                { 'bg-[#dfdfdf]': menu === label },
                { 'bg-[#F7F7F7]': menu !== label },
              )}
            >
              <Image
                src={`/image/icon/icon-${id}.svg`}
                alt="icon"
                width={36}
                height={36}
              />
              <span>{label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
