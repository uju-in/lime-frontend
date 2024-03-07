import RQProvider from '@/app/_components/RQProvider'

export default function DetailItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RQProvider>{children}</RQProvider>
}
