import RQProvider from '@/app/_components/RQProvider'
import MoAddButton from '@/app/_components/layout/mobile/MoAddButton'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import MoVoteHeader from './_component/MoVoteHeader'

export default function DetailItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MoVoteHeader />
      <RQProvider>{children}</RQProvider>
      <MoAddButton path="votes/add-vote" />
      <MoNavbar />
    </>
  )
}
