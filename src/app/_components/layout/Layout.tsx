import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './Header'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="my-0 flex h-screen flex-col">
      <Header />
      <div className="h-full pb-[18px]">{children}</div>
      <Toaster />
    </div>
  )
}

export default Layout
