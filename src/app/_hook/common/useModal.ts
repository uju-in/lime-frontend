import { ModalComponentProps, modalsState } from '@/app/_atoms/modalState'
import { useRecoilState } from 'recoil'

export const useModals = () => {
  const [modals, setModals] = useRecoilState<ModalComponentProps[]>(modalsState)

  const open = <P>(Component: React.FC<P>, props?: P) => {
    setModals((prevModals) => [
      ...prevModals,
      { Component, props } as ModalComponentProps,
    ])
  }

  const close = () => {
    setModals((prevModals) => prevModals.slice(0, -1))
  }

  return {
    modals,
    open,
    close,
  }
}
