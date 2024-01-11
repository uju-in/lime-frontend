import React, { ReactNode } from 'react'
import Header from './Header'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto my-0 flex h-screen max-w-[1440px] flex-col px-[150px]">
      <Header />
      <div className="h-full py-[18px]">{children}</div>
    </div>
  )
}

export default Layout
