import Image from 'next/image'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { cn } from '@/app/_utils/twMerge'
import CategoryPicker from '../../_components/categoryPicker/CategoryPicker'
import LoadMoreButton from '../_components/LoadMoreButton'
import VoteSection from '../_components/VoteSection'
import ItemSection from '../_components/ItemSection'

type Props = {
  searchParams: { category: string }
}

export default function Home({ searchParams }: Props) {
  const { category = '농구' } = searchParams

  return (
    <main className={cn('bg-[#F7F7F7]', 'mo:bg-white')}>
      {/** 메인 검색창 임시 보류 */}

      {/* <section className="flex justify-center py-[51px]">
        <div className="flex h-[72px] w-[996px] items-center justify-center gap-[23.1px] rounded-[57.823px] border-2 border-black">
          <Image
            width={34}
            height={34}
            src="/image/icon/icon-search.svg"
            alt="search keyword"
          />
          <input
            className="h-[32px] w-[836px] text-[26px] font-[400] text-[#A5A5A5] outline-0"
            placeholder="어떤 아이템을 찾으시나요?"
          />
        </div>
      </section> */}
      {/* <section className="bg-white pt-[51px]">
        <CategoryPicker />
      </section> */}
      {/** Feed */}
      <article
        className={cn(
          'mx-auto max-w-[1440px] px-[118px]',
          'mo:w-full mo:px-[16px]',
        )}
      >
        <section className="pt-[80px]">
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">피드</strong>
            <LoadMoreButton sectionName="피드" />
          </div>
          <div className="mt-[32px] h-[357px]" />
        </section>
        {/** Votes */}
        <section className={cn('mt-[157px] pb-[157px]', 'mo:pb-[52px]')}>
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
