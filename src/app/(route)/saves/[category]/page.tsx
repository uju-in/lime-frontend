import React from 'react'
import Layout from '@/app/_components/layout/Layout'
import { SaveFolderHeader, SaveFolderItemList } from './_component'

export default function SavesDetailPage() {
  return (
    <Layout>
      <SaveFolderHeader />
      <SaveFolderItemList />
    </Layout>
  )
}
