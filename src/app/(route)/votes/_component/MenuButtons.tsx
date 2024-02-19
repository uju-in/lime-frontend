'use client'

import { CategoryOption } from '@/app/_constants'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function MenuButtons() {
  const router = useRouter()

  // const title = useGetSearchParam('title')
  const title = '스포츠'
  // const category = useGetSearchParam('category')
  const category = '농구'

  const categoryList = CategoryOption.find((item) => {
    return item.title === title
  })

  return (
    <>
      <ul className="flex gap-[15px] text-[20px] font-[700]">
        {CategoryOption.map((item) => (
          <li
            key={item.title}
            className="h-[42.5px] w-[86.5px] rounded-[83.333px] bg-[#000] px-[16px] py-[8px] text-[#fff]"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <ul className="mt-[20px] flex gap-[15px]">
        {/* <button
          type="button"
          className="h-[39px] w-[60px] border-[3px] border-x-0 border-t-0 border-b-[#000] font-[600]"
        >
          농구
        </button> */}
        {categoryList &&
          categoryList.list.map((item) => {
            return (
              <li
                key={item}
                className="h-[39px] w-[60px] border-[3px] border-x-0 border-t-0 border-b-[#000] font-[600]"
              >
                <Link href={`/items?title=${title}&category=${item}`}>
                  {item}
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}
