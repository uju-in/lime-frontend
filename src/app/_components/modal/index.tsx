import Image from 'next/image'
import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      id="ModalContainer"
      className="fixed bottom-0 left-0 right-0 top-0 z-[500] h-screen min-h-screen w-full bg-[rgba(0,0,0,0.7)]"
    >
      <div
        id="ModalInner"
        className="absolute left-[50%] top-[50%] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white"
      >
        <button
          type="button"
          aria-label="close"
          className="absolute right-[15px] top-[20px] w-[20px]"
          onClick={() => {
            onClose()
          }}
        >
          <Image
            width={36}
            height={36}
            className=""
            src="/image/icon/icon-close.svg"
            alt="close"
          />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
