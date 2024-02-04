import { Item } from '@/app/(route)/items/_components/ItemList'
import React from 'react'

export default function SaveFolderItemList() {
  return (
    <div className="mx-auto my-[100px] grid max-w-[1200px] grid-cols-[repeat(auto-fill,150px)] justify-center gap-x-[10px] gap-y-[25px]">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}
