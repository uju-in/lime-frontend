import MoDetailVoteHeader from './_component/MoDetailVoteHeader'

export default function DetailItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex h-dvh justify-center">
      <MoDetailVoteHeader />
      {children}
    </section>
  )
}
