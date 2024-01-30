import Layout from '@/app/_components/layout/Layout'

export default function AddVoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <main className="flex justify-center bg-[#F7F7F7]">{children}</main>
    </Layout>
  )
}
