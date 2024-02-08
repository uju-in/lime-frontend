import RQProvider from '@/app/_components/RQProvider'
import Layout from '@/app/_components/layout/Layout'

export default function AddVoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <RQProvider>
        <main className="flex justify-center bg-[#F7F7F7]">{children}</main>
      </RQProvider>
    </Layout>
  )
}
