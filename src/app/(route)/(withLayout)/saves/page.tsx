import React from 'react'

import RQProvider from '@/app/_components/RQProvider'
import SaveComponent from './_component/SaveComponent'

export default function SavesPage() {
  return (
    <RQProvider>
      <SaveComponent />
    </RQProvider>
  )
}
