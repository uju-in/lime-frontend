'use client'

import useAddVote from '@/app/_hook/api/votes/mutations/useAddVote'
import { SelectedItemType, VoteInfoType } from '@/app/_types/addVote.type'
import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useCallback, useState } from 'react'
import VoteForm from './VoteForm'
import VoteModal from './VoteModal'

export default function AddVotePage() {
  const router = useRouter()

  const [showVoteModal, setShowVoteModal] = useState(false)
  const [itemType, setItemType] = useState<string | null>(null)
  const [voteInfo, setVoteInfo] = useState<VoteInfoType>({
    hobby: '',
    maximumParticipants: 100,
    content: '',
    item1Id: null,
    item2Id: null,
  })

  /**
   * itemImageUrl1,2 - Selected Item Image URL
   * itemTitle1,2 - Selected Item Title
   */

  const [selectedItem, setSelectedItem] = useState<SelectedItemType>({
    imageUrl1: null,
    imageUrl2: null,
    title1: '',
    title2: '',
  })

  const { mutateAsync: addVote } = useAddVote()

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target

    setVoteInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleOpenModal = (type: 'item1' | 'item2') => {
    setItemType(type)
    setShowVoteModal(true)
  }

  const handleSelectItem = useCallback(
    (selectItem: CurrentFavoriteItemMetadata) => {
      const { itemId, imageUrl, originalName } = selectItem

      if (itemType === 'item1') {
        setVoteInfo((prevState) => ({
          ...prevState,
          item1Id: itemId,
        }))
        setSelectedItem((prevState) => ({
          ...prevState,
          imageUrl1: imageUrl,
          title1: originalName,
        }))
      } else if (itemType === 'item2') {
        setVoteInfo((prevState) => ({
          ...prevState,
          item2Id: itemId,
        }))
        setSelectedItem((prevState) => ({
          ...prevState,
          imageUrl2: imageUrl,
          title2: originalName,
        }))
      }
    },
    [itemType],
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const status = await addVote(voteInfo)

    if (status === 200) {
      router.push('/votes')
    }
  }

  return (
    <>
      <VoteForm
        handleChange={handleChange}
        handleOpenModal={handleOpenModal}
        handleSubmit={handleSubmit}
        voteInfo={voteInfo}
        setVoteInfo={setVoteInfo}
        selectedItem={selectedItem}
      />
      {showVoteModal && (
        <VoteModal
          setShowVoteModal={setShowVoteModal}
          selectItem={handleSelectItem}
        />
      )}
    </>
  )
}
