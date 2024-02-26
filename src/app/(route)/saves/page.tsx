'use client'

import React, { useState } from 'react'

import Layout from '@/app/_components/layout/Layout'
import RQProvider from '@/app/_components/RQProvider'
import AddFolderModal from './_component/AddFolderModal'
import MoveFolderModal from './_component/MoveFolderModal'
import SaveComponent from './_component/SaveComponent'

export default function SavesPage() {
  const [showAddFolderModal, setShowAddFolderModal] = useState(false)
  const [showMoveFolderModal, setShowMoveFolderModal] = useState(false)

  return (
    <Layout>
      <RQProvider>
        <SaveComponent
          setShowAddFolderModal={setShowAddFolderModal}
          setShowMoveFolderModal={setShowMoveFolderModal}
        />

        {/* ------ 모달 ------ */}
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
