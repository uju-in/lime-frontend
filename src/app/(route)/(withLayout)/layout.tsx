import RQProvider from '@/app/_components/RQProvider'
import Footer from '@/app/_components/layout/Footer'
import Header from '@/app/_components/layout/Header'
import SearchHeader from '@/app/_components/layout/search/SearchHeader'
import ModalContainer from '@/app/_components/modalContainer'
import { ReactNode } from 'react'
import HomeHeader from './_components/HomeHeader'

export default function WithLayout({ children }: { children: ReactNode }) {
  return (
    <main className="my-0 flex flex-col">
      <SearchHeader />
      <Header />
      <HomeHeader />
      <div className="mb-[18px]">
        <RQProvider>
          {children}
          <ModalContainer />
        </RQProvider>
      </div>
      <Footer />
    </main>
  )
}
