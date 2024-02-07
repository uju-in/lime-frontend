'use client'

import dynamic from 'next/dynamic'

type Props = { children: JSX.Element }

const NoSSRRendering = ({ children }: Props) => {
  return children
}

export default dynamic(() => Promise.resolve(NoSSRRendering), {
  ssr: false,
})
