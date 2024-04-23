import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

const SideMenu = [
  { label: '인벤토리', id: 'inventory' },
  { label: '버킷', id: 'bucket' },
  { label: 'MY피드', id: 'feed' },
  { label: 'MY투표', id: 'vote' },
]

export default function MypageNav() {
  const tab = '인벤토리'

  return (
    <nav>
      <ul className="flex flex-col gap-[12px]">
        {SideMenu.map(({ label, id }) => (
          <li key={id}>
            <button
              className={cn(
                'flex w-full items-center gap-[16px] rounded-[4px] p-[12px_25px] text-[18px] font-semibold',
                { 'bg-[#dfdfdf]': tab === label },
              )}
              type="button"
            >
              <Image
                src={`/image/icon/icon-${id}.svg`}
                alt="icon"
                width={36}
                height={36}
              />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
