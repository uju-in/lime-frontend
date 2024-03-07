import Layout from '@/app/_components/layout/Layout'
import React, { ReactNode } from 'react'

export default function WithLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}
