import React from 'react'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'

export default function page() {
  return (
    <>
      <SideMenu />
      <div className="flex-1">
        <ItemList />
      </div>
    </>
  )
}
