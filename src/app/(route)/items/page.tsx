import React from 'react'
import Image from 'next/image'
import Layout from '@/app/_components/layout/Layout'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'

export default function page() {
  return (
    <Layout>
      <div className="flex gap-[50px] px-[150px]">
        <SideMenu />
        <div className="flex-1">
          {/* Sort Box */}
          <div className="my-[30px] flex cursor-pointer items-center justify-end">
            인기순
            <Image
              width={20}
              height={20}
              src="image/icon/icon-arrow_bottom.svg"
              alt="arrow_bottom"
            />
          </div>
          <ItemList />
        </div>
      </div>
    </Layout>
  )
}
