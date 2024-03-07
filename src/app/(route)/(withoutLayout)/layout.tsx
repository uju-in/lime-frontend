import React, { ReactNode } from 'react'

export default function WithoutLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}
