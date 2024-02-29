import React from 'react'
import Layout from '@/app/_components/layout/Layout'
import RQProvider from '@/app/_components/RQProvider'

import SaveFolderComponent from './_component/SaveFolderComponent'

type Props = {
  params: { folderId: number }
  searchParams: { name: string }
}

export default function SavesDetailPage({ params, searchParams }: Props) {
  const { folderId } = params
  const { name } = searchParams

  return (
    <Layout>
      <RQProvider>
        <SaveFolderComponent folderId={Number(folderId)} folderName={name} />
      </RQProvider>
    </Layout>
  )
}
