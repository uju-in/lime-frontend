'use client'

import { cn } from '@/app/_utils/twMerge'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'

import { ItemState } from '@/app/_types/addItem.type'

import useAddItem from '@/app/_hook/api/items/mutations/useAddItem'

import { validateUrl } from '../_utils/validation'

import Categories from '../../../../../_components/categorySelector'

export default function PostForm() {
  const router = useRouter()

  const { mutateAsync: addItem } = useAddItem()

  const [item, setItem] = useState<ItemState>({
    hobbyName: '',
    itemUrl: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  /** 아이템 등록 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValid = validateUrl(item.itemUrl)

    if (!isValid) {
      return
    }

    const data = await addItem(item)

    if (data === 200) {
      router.push('/items')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mt-[61px] text-[18px]  font-semibold">
        아이템 추가할 취미를 선택해 주세요.
      </p>
      <Categories
        setCategory={(hobbyName) => setItem({ ...item, hobbyName })}
      />
      <p
        className={cn(
          'mb-[36px] mt-[70px] text-[18px] font-[600]',
          'mo:mb-[13px] mo:mt-[48px]',
        )}
      >
        아이템 추가할 URL을 입력하세요
      </p>
      <input
        name="itemUrl"
        className={cn(
          'h-[40px] w-[720px] rounded-[2px] border border-[#DADADA] p-1 focus:outline-none',
          'mo:w-full',
        )}
        onChange={handleChange}
      />
      <p className="mt-[8px] text-[14px] font-[400] text-[#A4A4A4]">
        *네이버 쇼핑, 쿠팡, 다나와 URL만 입력 가능합니다.
      </p>
      <div className="flex justify-center">
        <button
          className={cn(
            'mt-[70px] h-[45px] w-[250px] rounded-[2px] bg-black text-[15px] text-white',
            'mo:w-full',
          )}
          type="submit"
        >
          생성하기
        </button>
      </div>
    </form>
  )
}
