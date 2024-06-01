'use client'

import { cn } from '@/app/_utils/twMerge'
import { ReactNode, useEffect } from 'react'

type ModalProps = {
  children: ReactNode
  isScrollActive?: boolean
  innerClassNames?: string
}

function Modal({
  isScrollActive = false,
  innerClassNames,
  children,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div
      id="ModalContainer"
      className="fixed bottom-0 left-0 right-0 top-0 z-[500] h-screen min-h-screen w-full bg-[rgba(0,0,0,0.7)]"
    >
      <div
        id="ModalInner"
        className={cn(
          'absolute left-[50%] top-[50%] max-h-[90vh] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white',
          {
            'overflow-y-scroll': isScrollActive,
            'overflow-x-hidden': !isScrollActive,
          },
          innerClassNames,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
