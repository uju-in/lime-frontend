/** 아이템 선택 확정 시 투표 이미지, 제목 설정 */

import { SelectedItemType } from '@/app/_types/addVote.type'
import { atom } from 'recoil'

export const selectedItemState = atom<SelectedItemType>({
  key: 'selectedItemState',
  default: {
    imageUrl1: null,
    imageUrl2: null,
    title1: '',
    title2: '',
  },
})
