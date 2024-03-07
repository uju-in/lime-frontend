import React from 'react'

import RQProvider from '@/app/_components/RQProvider'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import SaveComponent from './_component/SaveComponent'

export default function SavesPage() {
  return (
    <RQProvider>
      <SaveComponent />
      <MoNavbar />
    </RQProvider>
  )
}
