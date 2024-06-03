import MoAddButton from '@/app/_components/layout/mobile/MoAddButton'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import MoVoteHeader from './_component/MoVoteHeader'

export default function DetailItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <MoVoteHeader />
      {children}
      <MoAddButton path="votes/add-vote" />
      <MoNavbar />
    </section>
  )
}
