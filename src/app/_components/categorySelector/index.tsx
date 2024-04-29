'use client'

import { cn } from '@/app/_utils/twMerge'
import React, { useEffect, useState } from 'react'

interface Categories {
  스포츠: string | null
  라이프: string | null
}

interface CategorySelectorProps {
  setCategory: (item: string) => void
  initialHobby?: string | null
}

const categories: { [K in keyof Categories]: string[] } = {
  스포츠: ['농구', '야구', '배드민턴', '헬스', '클라이밍'],
  라이프: ['드로잉', '음악', '쿠킹', '게임', '데스크테리어'],
}

const findInitialCategory = (hobby: string | null | undefined) => {
  if (!hobby) return null

  const category = Object.entries(categories).find(([_, items]) =>
    items.includes(hobby),
  )
  return category ? category[0] : null
}

export default function CategorySelector({
  setCategory,
  initialHobby,
}: CategorySelectorProps) {
  const initialCategory = findInitialCategory(initialHobby || null)

  const [selected, setSelected] = useState<{
    category: keyof Categories | null
    item: string | null
  }>({
    category: initialCategory as keyof Categories,
    item: initialHobby || null,
  })

  useEffect(() => {
    if (initialHobby && initialCategory) {
      setSelected({
        category: initialCategory as keyof Categories,
        item: initialHobby,
      })
      setCategory(initialHobby)
    }
  }, [initialHobby, initialCategory])

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
            <p className="mb-[4px] mt-8 text-[14px] font-[400]">
              {categoryGroup}
            </p>
            <div className={cn('flex flex-wrap gap-[8px]', 'mo:gap-[6px]')}>
              {items.map((item) => {
                const checked =
                  selected.item === item && selected.category === categoryGroup
                return (
                  <label
                    key={item}
                    className={cn(
                      'flex h-[32px] cursor-pointer items-center rounded-[40px] border px-[16px] text-[12px] font-medium',
                      {
                        'border-black': checked,
                        'border-[#BDBDBD] text-[#BDBDBD]': !checked,
                      },
                      'mo:px-[14px]',
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
