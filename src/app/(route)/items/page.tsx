import React from 'react'
import Layout from '@/app/_components/layout/Layout'
import RQProvider from '@/app/_components/RQProvider'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'

export default function page() {
  return (
    <Layout>
      <div className="flex gap-[50px] px-[150px]">
        <SideMenu />
        <div className="flex-1">
          <RQProvider>
            <ItemList />
          </RQProvider>
        </div>
      </div>
    </Layout>
  )
}
