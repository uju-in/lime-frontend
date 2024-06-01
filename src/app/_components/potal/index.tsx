import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface PropsType {
  title: string
  children: ReactNode
}

export default function Portal({ title, children }: PropsType) {
  const el = document.createElement('div')
  el.id = title

  useEffect(() => {
    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  })

  return createPortal(children, el)
}
