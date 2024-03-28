import { atom } from 'recoil'
import { SavePageMode } from '../_types/save.type'

export const saveModeState = atom<SavePageMode>({
  key: 'saveMode',
  default: SavePageMode.DEFAULT,
})
