import { atom } from 'recoil'
import { ItemInfo } from '../_types/item.type'

export const itemDataState = atom<ItemInfo | null>({
  key: 'itemDataState',
  default: null,
})
