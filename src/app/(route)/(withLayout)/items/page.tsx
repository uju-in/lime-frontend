import React from 'react'
import { cn } from '@/app/_utils/twMerge'
import CategoryPicker from '@/app/_components/categoryPicker/CategoryPicker'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'

export default function page() {
  return (
    <>
      <div
        className={cn('mt-[16px] hidden justify-between pt-[56px]', 'mo:flex')}
      >
        <CategoryPicker path="/items" />
      </div>
      <div
        className={cn(
          'mx-auto flex w-[1200px] max-w-full justify-center gap-[50px] px-[10px]',
          'mo:px-[16px]',
        )}
      >
        <SideMenu />
        <div className="flex-1">
          <ItemList />
        </div>
      </div>
    </>
  )
}
