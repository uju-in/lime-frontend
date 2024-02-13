import Layout from '@/app/_components/layout/Layout'

export default function DetailItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <main className="flex h-dvh justify-center">{children}</main>
    </Layout>
  )
}
