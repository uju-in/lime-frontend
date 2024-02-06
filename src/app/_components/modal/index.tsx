import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
  isScrollActive?: boolean
}

function Modal({ isScrollActive = false, children }: ModalProps) {
  return (
    <div
      id="ModalContainer"
      className="fixed bottom-0 left-0 right-0 top-0 z-[500] h-screen min-h-screen w-full bg-[rgba(0,0,0,0.7)]"
    >
      <div
        id="ModalInner"
        className={`absolute left-[50%] top-[50%] max-h-[90vh] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white ${
          isScrollActive ? 'overflow-scroll' : 'overflow-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
