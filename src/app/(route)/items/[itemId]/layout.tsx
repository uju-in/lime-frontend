import RQProvider from '@/app/_components/RQProvider'
import Layout from '@/app/_components/layout/Layout'

export default function DetailItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <RQProvider>{children} </RQProvider>
    </Layout>
  )
}
