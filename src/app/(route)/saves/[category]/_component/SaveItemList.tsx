'use client'

import React from 'react'
import { SavePageMode } from '@/app/_types/save.type'
import SaveItem from './SaveItem'

interface Props {
  mode: SavePageMode
  checkedList: number[]
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>
}

export default function SaveItemList({
  mode,
  checkedList,
  setCheckedList,
}: Props) {
  return (
    <div className="relative grid grid-cols-[repeat(auto-fill,184px)] justify-center gap-x-[19px] gap-y-[25px]">
      {[...Array(10)].map((_, index) => (
        <SaveItem
          // TODO: API 연동 후 eslint 제거 예정
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          isChecked={checkedList.includes(index)}
          onClick={() => {
            if (mode !== SavePageMode.EDIT_LIST) return
            if (!checkedList.includes(index))
              setCheckedList((prev) => prev.concat(index))
            else setCheckedList((prev) => prev.filter((item) => item !== index))
          }}
        />
      ))}
    </div>
  )
}
