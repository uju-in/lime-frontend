import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import CategoryPicker from '../../_components/categoryPicker/CategoryPicker'
import LoadMoreButton from './_components/LoadMoreButton'
import VoteSection from './_components/VoteSection'
import ItemSection from './_components/ItemSection'

type Props = {
  searchParams: { category: string }
}

export default function Home({ searchParams }: Props) {
  const { category = '농구' } = searchParams

  return (
    <main className={cn('bg-[#F7F7F7]', 'mo:bg-white')}>
      <section className="bg-white pt-[56px]">
        <CategoryPicker />
      </section>
      {/** Feed */}
      <article
        className={cn(
          'mx-auto max-w-[1440px] px-[118px]',
          'mo:w-full mo:px-[16px]',
        )}
      >
        {/* <section className="pt-[80px]">
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">피드</strong>
            <LoadMoreButton sectionName="피드" />
          </div>
          <div className="mt-[32px] h-[357px]" />
        </section> */}
        {/** Votes */}
        <section className={cn('pb-[157px] pt-[80px]', 'mo:pb-[52px]')}>
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">투표</strong>
            <LoadMoreButton sectionName="투표" />
          </div>
          <VoteSection hobby={category} />
        </section>
        {/** Items */}
        <section className={cn('mt-[157px] pb-[157px]', 'mo:mt-0 mo:w-full')}>
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">아이템</strong>
            <LoadMoreButton sectionName="아이템" />
          </div>
          <ItemSection hobby={category} />
        </section>
      </article>
      <MoNavbar />
    </main>
  )
}
