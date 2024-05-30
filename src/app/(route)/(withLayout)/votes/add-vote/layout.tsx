import MoAddVoteHeader from './_component/MoAddVoteHeader'

export default function AddVoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-[#F7F7F7]">
      <MoAddVoteHeader />
      {children}
    </section>
  )
}
