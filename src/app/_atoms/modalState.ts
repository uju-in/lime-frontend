/** 모달 on/off 관리 */

import { atom } from 'recoil'

export interface ModalComponentProps<P = Record<string, unknown>> {
  Component: React.FC<P>
  props?: P
}

export const modalsState = atom<ModalComponentProps[]>({
  key: 'modalsState',
  default: [],
})
