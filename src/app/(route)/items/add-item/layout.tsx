import Layout from '@/app/_components/layout/Layout'

export default function AddItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <div className="mx-auto flex h-dvh max-w-[1440px] justify-center bg-[#F7F7F7]">
        {children}
      </div>
    </Layout>
  )
}
