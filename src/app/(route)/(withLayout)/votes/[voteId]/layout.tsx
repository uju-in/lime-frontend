import MoDetailVoteHeader from './_component/MoDetailVoteHeader'

export default function DetailItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex h-dvh justify-center">
      <MoDetailVoteHeader />
      {children}
    </main>
  )
}
