'use client'

import { useState } from 'react'

export default function Categories({ categories }: { categories: string[] }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  return (
    <div className="flex flex-wrap">
      {categories.map((item: string) => (
        <label
          key={item}
          className={`my-4 mr-6 inline-block cursor-pointer rounded-full border px-5 py-1 font-[600] ${
            selectedItem === item
              ? 'border-black'
              : 'border-[#DADADA] text-[#898989]'
          }`}
        >
          <input
            type="radio"
            name="category"
            value={item}
            checked={selectedItem === item}
            onChange={() => setSelectedItem(item)}
            className="sr-only"
            required
          />
          {item}
        </label>
      ))}
    </div>
  )
}
