import Modal from '@/app/_components/modal'
import React from 'react'

interface PropsType {
  setShowVoteModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function VoteModal(props: PropsType) {
  const { setShowVoteModal } = props
  return (
    <Modal>
      <div className="h-[592px] w-[852px] rounded-[28px] bg-red-500" />
    </Modal>
  )
}
