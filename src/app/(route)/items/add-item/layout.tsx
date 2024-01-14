import Layout from '@/app/_components/layout/Layout'

export default function AddItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <div className="flex h-dvh justify-center bg-[#F7F7F7]">{children}</div>
    </Layout>
  )
}
