import { CategoryOption } from '@/app/_constants'
import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'
import React from 'react'

const SideMenu = [
  { label: '인벤토리', id: 'inventory' },
  { label: '버킷', id: 'bucket' },
  { label: 'MY피드', id: 'feed' },
  { label: 'MY투표', id: 'vote' },
]

const page = () => {
  const title = '스포츠'
  const category = '농구'
  const path = '/'
  const tab = '인벤토리'
  const categoryList = CategoryOption.find((item) => {
    return item.title === title
  })

  return (
    <div className="flex gap-[65px]">
      <article className="flex max-w-[342px] flex-col gap-[19px]">
        <div className="flex w-fit flex-col items-center bg-white p-[32px_45px_55px] text-[14px] shadow-[0_0_7.8px_3px_rgba(0,0,0,0.10)]">
          <div className="mb-[23px] h-[113px] w-[113px] rounded-full bg-[#D9D9D9]" />
          <p className="mb-[8px] text-[20px] font-bold">밝은 노란색 치타</p>
          <p className="mb-[12px] text-[16px] font-bold text-[#747474]">
            Lv. 10
          </p>
          <p className="text-center text-[#8a8a8a]">
            안녕하세용 저는 밝은 노란색 치타입니다ㅎㅎ
            <br />
            반가워용~
          </p>

          <div className="my-[43px] flex w-full flex-col gap-[10px]">
            <div className="flex w-full justify-between px-[19px]">
              <span className="font-bold">취미</span>
              <span className="font-medium text-[#808080]">자전거</span>
            </div>
            <div className="flex w-full justify-between px-[19px]">
              <span className="font-bold">경력</span>
              <span className="font-medium text-[#808080]">6년차</span>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-[7px] rounded-full bg-[#9c9c9c] py-[8px] text-[16px] font-bold text-white"
          >
            <Image
              src="/image/icon/icon-pencil_white.svg"
              width={24}
              height={24}
              alt="pencil"
            />
            <span>내 프로필 편집</span>
          </button>
        </div>
        <div>
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
        </div>
      </article>
      <main className="pt-[89px]">
        <div className="flex gap-[15px]">
          <button
            type="button"
            className="rounded-full bg-black p-[8px_16px] font-bold text-white"
          >
            스포츠
          </button>
          <button type="button" className="p-[8px_16px] font-bold text-[#aaa]">
            라이프
          </button>
        </div>
        <ul
          className={cn('mt-[20px] flex gap-[15px] text-center', {
            'justify-center': path === '/',
          })}
        >
          {categoryList &&
            categoryList.list.map((item) => {
              return (
                <li
                  key={item}
                  className={cn(
                    'min-w-[60px] cursor-pointer border-[3px] p-[6px_16px] font-semibold',
                    {
                      'border-x-0 border-t-0 border-b-[#000]':
                        category === item,
                      'border-0 font-medium text-[#6f6f6f]': category !== item,
                    },
                  )}
                >
                  {item}
                </li>
              )
            })}
        </ul>
      </main>
    </div>
  )
}

export default page
