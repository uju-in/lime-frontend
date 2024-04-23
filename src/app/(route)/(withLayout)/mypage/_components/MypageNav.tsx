import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import Link from 'next/link'

const SideMenu = [
  // { label: '인벤토리', id: 'inventory' },
  // { label: 'MY피드', id: 'feed' },
  { label: 'MY투표', id: 'vote' },
]

export default function MypageNav({ title }: { title: string }) {
  return (
    <nav>
      <ul className="flex flex-col gap-[12px]">
        {SideMenu.map(({ label, id }) => (
          <Link key={id} href={`/mypage?title=${id}`}>
            <li
              className={cn(
                'flex w-full items-center gap-[16px] rounded-[4px] p-[12px_25px] text-[18px] font-semibold',
                { 'bg-[#dfdfdf]': title === id },
                { 'bg-[#F7F7F7]': title !== id },
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
