import { CategoryOption } from '@/app/_constants'
import Link from 'next/link'
import React from 'react'

export default function ItemSection() {
  return (
    <div className="absolute left-0 top-[40px] z-50 flex min-w-[300px] origin-top scale-y-0 transform divide-x rounded-[4px] bg-white py-[18px] text-[15px] text-[#575757] shadow-[0px_0px_7.8px_3px_rgba(0,0,0,0.10)] transition duration-300 ease-in-out group-hover:scale-y-100">
      {CategoryOption.map(({ title, list }) => {
        return (
          <ul key={title} className="flex flex-col gap-[13px] px-[30px]">
            <li className="font-bold text-black">{title}</li>
            {list.map((item) => {
              return (
                <li key={item}>
                  <Link
                    className="hover:text-black"
                    href={`/items?title=${title}&category=${item}`}
                  >
                    {item}
                  </Link>
                </li>
              )
            })}
          </ul>
        )
      })}
    </div>
  )
}
