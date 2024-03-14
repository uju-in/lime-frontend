import React from 'react'
import RQProvider from '@/app/_components/RQProvider'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'

export default function page() {
  return (
    <>
      <div
        className={cn(
          'mx-auto flex w-[1024px] max-w-full gap-[50px] px-[10px]',
          'mo:px-[16px]',
        )}
      >
        <SideMenu />
        <div className="flex-1">
          <RQProvider>
            <ItemList />
          </RQProvider>
        </div>
      </div>
      <MoNavbar />
    </>
  )
}
