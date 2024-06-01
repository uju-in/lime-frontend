import { cn } from '@/app/_utils/twMerge'
import { Suspense } from 'react'
import AddVotePage from './_component/AddVotePage'

export default function page() {
  return (
    <main
      className={cn(
        'mx-auto w-[780px] bg-white px-[30px]',
        ' mo:w-full mo:px-[16px]',
      )}
    >
      <h1
        className={cn(
          'mb-[10px] pt-[39px] text-[30px] font-[600]',
          'mo:hidden',
        )}
      >
        투표 생성
      </h1>
      <Suspense>
        <AddVotePage />
      </Suspense>
    </main>
  )
}
