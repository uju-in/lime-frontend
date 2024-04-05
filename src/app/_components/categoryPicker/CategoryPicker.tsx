'use client'

import { cn } from '@/app/_utils/twMerge'
import Link from 'next/link'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { CategoryOption } from '@/app/_constants'
import { defaultCategory } from '../../_utils/defaultCategory'

export default function CategoryPicker({ path = '/' }: { path?: string }) {
  const title = useGetSearchParam('title') || '스포츠'
  const category = useGetSearchParam('category') || '농구'

  const categoryList = CategoryOption.find((item) => {
    return item.title === title
  })

  return (
    <div className="w-full">
      <ul
        className={cn(
          'flex gap-[15px] text-[20px] font-[700]',
          'mo:rounded-none mo:border mo:border-x-0 mo:border-t-0 mo:border-black mo:pl-[16px]',
          {
            'justify-center': path === '/',
          },
        )}
      >
        {CategoryOption.map((item) => (
          <Link
            href={`${path}?title=${item.title}&category=${defaultCategory(
              item.title,
            )}`}
            key={item.title}
          >
            <li
              className={cn(
                'cursor-pointer rounded-[83.333px] px-[16px] py-[8px] text-[#fff]',
                {
                  'bg-black text-white mo:rounded-none mo:border-2 mo:border-x-0 mo:border-t-0 mo:border-black mo:bg-white mo:text-black':
                    title === item.title,
                  'bg-white text-[#AAA]': title !== item.title,
                },
              )}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <ul
        className={cn(
          'mt-[20px] flex gap-[15px] overflow-x-scroll text-center scrollbar-hide',
          'mo:gap-[9px] mo:pl-[16px]',
          {
            'justify-center': path === '/',
          },
        )}
      >
        {categoryList &&
          categoryList.list.map((item) => {
            return (
              <Link href={`${path}?title=${title}&category=${item}`} key={item}>
                <li
                  className={cn(
                    'flex h-[39px] min-w-[60px] cursor-pointer items-center justify-center text-nowrap border-[3px] font-[600]',
                    'mo:rounded-[100px] mo:px-[14px] mo:py-[10px] mo:text-[12px] mo:font-[500] mo:text-white',
                    {
                      'border-x-0 border-t-0 border-b-[#000] mo:bg-black':
                        category === item,
                      'border-0 mo:bg-[#AEAEAE]': category !== item,
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
