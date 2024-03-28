import { atom } from 'recoil'

export const imageUrlsState = atom<string[]>({
  key: 'imageUrlsState',
  default: [],
})
