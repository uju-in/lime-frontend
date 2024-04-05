import React from 'react'

import SaveFolderComponent from './_component/SaveFolderComponent'

type Props = {
  params: { folderId: number }
  searchParams: { name: string }
}

export default function SavesDetailPage({ params, searchParams }: Props) {
  const { folderId } = params
  const { name } = searchParams

  return <SaveFolderComponent folderId={Number(folderId)} folderName={name} />
}
