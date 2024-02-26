'use client'

import React, { useState } from 'react'
import Layout from '@/app/_components/layout/Layout'
import RQProvider from '@/app/_components/RQProvider'

import AddFolderModal from '../_component/AddFolderModal'
import MoveFolderModal from '../_component/MoveFolderModal'
import SaveFolderComponent from './_component/SaveFolderComponent'

type Props = {
  params: { folderId: number }
}

export default function SavesDetailPage({ params }: Props) {
  const { folderId } = params
  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)

  return (
    <Layout>
      <RQProvider>
        <SaveFolderComponent
          folderId={Number(folderId)}
          setShowMoveFolderModal={setShowMoveFolderModal}
        />
        {/* // ----- 모달 ----- // */}
        {showMoveFolderModal && (
          <MoveFolderModal
            setShowMoveFolderModal={setShowMoveFolderModal}
            setShowAddFolderModal={setShowAddFolderModal}
          />
        )}
        {showAddFolderModal && (
          <AddFolderModal setShowAddFolderModal={setShowAddFolderModal} />
        )}
      </RQProvider>
    </Layout>
  )
}
