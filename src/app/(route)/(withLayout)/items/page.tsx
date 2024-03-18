import React from 'react'
import { cn } from '@/app/_utils/twMerge'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'

export default function page() {
  return (
    <div
      className={cn(
        'mx-auto flex w-[1024px] max-w-full justify-center gap-[50px] px-[10px]',
        'mo:px-[16px]',
      )}
    >
      <SideMenu />
      <div className="flex-1">
        <ItemList />
      </div>
    </div>
  )
}
