import { cn } from '@/app/_utils/twMerge'
import VoteForm from './_component/VoteForm'
import MoAddVoteHeader from './_component/MoAddVoteHeader'

export default function page() {
  return (
    <section
      className={cn(
        'mx-auto w-[780px] bg-white px-[30px]',
        ' mo:w-full mo:px-[16px]',
      )}
    >
      <MoAddVoteHeader />
      <h1
        className={cn(
          'mb-[10px] pt-[39px] text-[30px] font-[600]',
          'mo:hidden',
        )}
      >
        투표 생성
      </h1>
      <VoteForm />
    </section>
  )
}
