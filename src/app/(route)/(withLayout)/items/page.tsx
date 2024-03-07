import React from 'react'
import RQProvider from '@/app/_components/RQProvider'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'

export default function page() {
  return (
    <>
      <div className="flex gap-[50px] px-[150px]">
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
