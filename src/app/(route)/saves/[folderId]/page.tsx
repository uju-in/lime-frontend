'use client'

import React from 'react'
import Layout from '@/app/_components/layout/Layout'
import RQProvider from '@/app/_components/RQProvider'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'

import SaveFolderComponent from './_component/SaveFolderComponent'

type Props = {
  params: { folderId: number }
}

export default function SavesDetailPage({ params }: Props) {
  const { folderId } = params
  const folderName = useGetSearchParam('name')

  return (
    <Layout>
      <RQProvider>
        <SaveFolderComponent
          folderId={Number(folderId)}
          folderName={folderName || ''}
        />
      </RQProvider>
    </Layout>
  )
}
