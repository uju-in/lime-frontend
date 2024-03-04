import { atom } from 'recoil'

export const searchViewState = atom<boolean>({
  key: 'isSearchView',
  default: false,
})
