'use client'

import { CategoryOption } from '@/app/_constants'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { cn } from '@/app/_utils/twMerge'
import Link from 'next/link'
import { defaultCategory } from '../_utils/defaultCategory'

export default function MenuButtons() {
  const title = useGetSearchParam('title') || '스포츠'
  const category = useGetSearchParam('category') || '농구'

  const categoryList = CategoryOption.find((item) => {
    return item.title === title
  })

  return (
    <div>
      <ul className="flex gap-[15px] text-[20px] font-[700]">
        {CategoryOption.map((item) => (
          <Link
            href={`/votes?title=${item.title}&category=${defaultCategory(
              item.title,
            )}`}
            key={item.title}
          >
            <li
              className={cn(
                'h-[42.5px] w-[86.5px] cursor-pointer rounded-[83.333px] px-[16px] py-[8px] text-[#fff]',
                {
                  'bg-black text-white': title === item.title,
                  'bg-white text-[#AAA]': title !== item.title,
                },
              )}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <ul className="mt-[20px] flex gap-[15px] text-center">
        {categoryList &&
          categoryList.list.map((item) => {
            return (
              <Link href={`/votes?title=${title}&category=${item}`} key={item}>
                <li
                  className={cn(
                    'h-[39px] min-w-[60px] cursor-pointer  border-[3px] font-[600]',
                    {
                      'border-x-0 border-t-0 border-b-[#000]':
                        category === item,
                      'border-0': category !== item,
                    },
                  )}
                >
                  {item}
                </li>
              </Link>
            )
          })}
      </ul>
    </div>
  )
}
