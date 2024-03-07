import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="my-0 flex flex-col">
      <Header />
      <div className="pb-[18px]">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
