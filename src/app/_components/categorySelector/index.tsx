'use client'

import React, { useState } from 'react'

interface Categories {
  스포츠: string | null
  라이프: string | null
}

const categories: { [K in keyof Categories]: string[] } = {
  스포츠: ['농구', '야구', '배드민턴', '헬스', '클라이밍'],
  라이프: ['드로잉', '음악', '쿠킹', '게임', '데스크테리어'],
}

export default function CategorySelector() {
  const [selected, setSelected] = useState<{
    category: keyof Categories | null
    item: string | null
  }>({ category: null, item: null })

  const handleRadioChange = (category: keyof Categories, item: string) => {
    setSelected({ category, item })
  }

  return (
    <>
      {Object.keys(categories).map((categoryGroup) => {
        const items = categories[categoryGroup as keyof Categories]
        return (
          <React.Fragment key={categoryGroup}>
            <p className="mt-8 text-[14px] font-[400]">{categoryGroup}</p>
            <div className="flex flex-wrap">
              {items.map((item) => (
                <label
                  key={item}
                  className={`my-3 mr-3 inline-block h-[32px] cursor-pointer rounded-[40px] border px-5 py-1 text-[12px] font-[500] font-medium ${
                    selected.item === item &&
                    selected.category === categoryGroup
                      ? 'border-black'
                      : 'border-[#BDBDBD] text-[#BDBDBD]'
                  }`}
                >
                  <input
                    type="radio"
                    name="hobby"
                    value={item}
                    checked={
                      selected.item === item &&
                      selected.category === categoryGroup
                    }
                    onChange={() =>
                      handleRadioChange(categoryGroup as keyof Categories, item)
                    }
                    className="sr-only"
                    required
                  />
                  {item}
                </label>
              ))}
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}
