import React from 'react'

import Layout from '@/app/_components/layout/Layout'
import RQProvider from '@/app/_components/RQProvider'
import SaveComponent from './_component/SaveComponent'

export default function SavesPage() {
  return (
    <Layout>
      <RQProvider>
        <SaveComponent />
      </RQProvider>
    </Layout>
  )
}
