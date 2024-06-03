import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PropsType {
  title: string
  children: ReactNode
}

export default function Portal({ title, children }: PropsType) {
  const [el] = useState(() => {
    const element = document.createElement('div')
    element.id = title
    return element
  })

  useEffect(() => {
    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  }, [el])

  return createPortal(children, el)
}
