'use client'

import { modalsState } from '@/app/_atoms/modalState'
import { useRecoilValue } from 'recoil'

function ModalContainer() {
  const modals = useRecoilValue(modalsState)

  return (
    <>
      {modals.map((modal, index) => {
        const { Component, props } = modal
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="modal">
            <Component {...props} />
          </div>
        )
      })}
    </>
  )
}

export default ModalContainer
