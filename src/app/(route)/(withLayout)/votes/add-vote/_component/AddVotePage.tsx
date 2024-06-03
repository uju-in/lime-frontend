'use client'

import { selectedItemState } from '@/app/_atoms/selectedItemState'
import useAddVote from '@/app/_hook/api/votes/mutations/useAddVote'
import { useFolderList } from '@/app/_hook/api/votes/queries/useFolderList'
import { useModals } from '@/app/_hook/common/useModal'
import { VoteInfoType } from '@/app/_types/addVote.type'
import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useCallback, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import VoteForm from './VoteForm'
import VoteModal from './VoteModal'

export default function AddVotePage() {
  const router = useRouter()
  const { open } = useModals()

  const { mutateAsync: addVote } = useAddVote()
  /** 찜 폴더 리스트 캐싱 */
  useFolderList('folder')

  const [voteInfo, setVoteInfo] = useState<VoteInfoType>({
    hobby: '',
    maximumParticipants: 100,
    content: '',
    item1Id: null,
    item2Id: null,
  })

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [_, setSelectedItem] = useRecoilState(selectedItemState)
  const resetSelectedItem = useResetRecoilState(selectedItemState)

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target
    setVoteInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  /** 찜한 아이템 선택 */
  const handleSelectItem = useCallback(
    (
      selectItem: CurrentFavoriteItemMetadata,
      modalItemType: 'item1' | 'item2',
    ) => {
      const { itemId, imageUrl, originalName } = selectItem

      if (modalItemType === 'item1') {
        setVoteInfo((prevState) => ({
          ...prevState,
          item1Id: itemId,
        }))
        setSelectedItem((prevState) => ({
          ...prevState,
          imageUrl1: imageUrl,
          title1: originalName,
        }))
      } else if (modalItemType === 'item2') {
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
    [setVoteInfo, setSelectedItem],
  )

  const handleOpenModal = (type: 'item1' | 'item2') => {
    open(VoteModal, {
      onSelectItem: (item: CurrentFavoriteItemMetadata) =>
        handleSelectItem(item, type),
      itemType: type,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const status = await addVote(voteInfo)

    if (status === 200) {
      resetSelectedItem()
      router.push('/votes')
    }
  }

  return (
    <VoteForm
      handleChange={handleChange}
      handleOpenModal={handleOpenModal}
      handleSubmit={handleSubmit}
      voteInfo={voteInfo}
      setVoteInfo={setVoteInfo}
    />
  )
}
