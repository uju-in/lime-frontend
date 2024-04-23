import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'

const SideMenu = [
  // { label: '인벤토리', id: 'inventory' },
  // { label: 'MY피드', id: 'feed' },
  { label: 'MY투표', id: 'vote' },
]

export default function MypageNav({ menu = 'MY투표' }: { menu: string }) {
  return (
    <nav>
      <ul className="flex flex-col gap-[12px]">
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
