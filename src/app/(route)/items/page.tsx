import React from 'react'
import Layout from '@/app/_components/layout/Layout'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'
import SortBox from './_components/SortBox'

export default function page() {
  return (
    <Layout>
      <div className="flex gap-[50px] px-[150px]">
        <SideMenu />
        <div className="flex-1">
          {/* Sort Box */}
          <div className="relative my-[30px] flex items-center justify-end">
            <SortBox />
          </div>
          <ItemList />
        </div>
      </div>
    </Layout>
  )
}
