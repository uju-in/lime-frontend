'use client'

import { cn } from '@/app/_utils/twMerge'
import React, { useState } from 'react'

interface Categories {
  스포츠: string | null
  라이프: string | null
}

interface CategorySelectorProps {
  setCategory: (item: string) => void
}

const categories: { [K in keyof Categories]: string[] } = {
  스포츠: ['농구', '야구', '배드민턴', '헬스', '클라이밍'],
  라이프: ['드로잉', '음악', '쿠킹', '게임', '데스크테리어'],
}

export default function CategorySelector({
  setCategory,
}: CategorySelectorProps) {
  const [selected, setSelected] = useState<{
    category: keyof Categories | null
    item: string | null
  }>({ category: null, item: null })

  const handleRadioChange = (category: keyof Categories, item: string) => {
    setSelected({ category, item })
    setCategory(item)
  }

  return (
    <>
      {Object.keys(categories).map((categoryGroup) => {
        const items = categories[categoryGroup as keyof Categories]
        return (
          <React.Fragment key={categoryGroup}>
            <p className="mt-8 text-[14px] font-[400]">{categoryGroup}</p>
            <div className="flex flex-wrap">
              {items.map((item) => {
                const checked =
                  selected.item === item && selected.category === categoryGroup
                return (
                  <label
                    key={item}
                    className={cn(
                      'my-3 mr-3 flex h-[32px] cursor-pointer items-center rounded-[40px] border px-5 text-[12px] font-medium',
                      {
                        'border-black': checked,
                        'border-[#BDBDBD] text-[#BDBDBD]': !checked,
                      },
                    )}
                  >
                    <input
                      type="radio"
                      name="hobby"
                      value={item}
                      checked={checked}
                      onChange={() =>
                        handleRadioChange(
                          categoryGroup as keyof Categories,
                          item,
                        )
                      }
                      className="sr-only"
                      required
                    />
                    {item}
                  </label>
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}
