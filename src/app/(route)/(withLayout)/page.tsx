import Image from 'next/image'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import { GetSearchParams } from '../../_components/GetSearchParams'
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
    <main className="bg-[#F7F7F7]">
      {/* 로그인 시 토큰 저장을 위해 임시로 배치한 클라이언트 컴포넌트 */}
      <GetSearchParams />
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
      <section className="bg-white pt-[51px]">
        <CategoryPicker />
      </section>
      {/** Feed */}
      <article className="mx-auto max-w-[1440px] px-[118px]">
        <section className="pt-[80px]">
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">피드</strong>
            <button
              type="button"
              className="flex h-[45px] w-[152px] items-center justify-center gap-[7.5px] rounded-[30px] bg-[#424242] text-[14px] font-[700] text-white"
            >
              <span>피드 더보기</span>
              <Image
                width={18}
                height={18}
                src="/image/icon/icon-arrow_long_right_white.svg"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="mt-[32px] h-[357px]" />
        </section>
        {/** Votes */}
        <section className="mt-[157px] pb-[157px]">
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">투표</strong>
            <LoadMoreButton sectionName="투표" />
          </div>
          <VoteSection hobby={category} />
        </section>
        {/** Items */}
        <section className="mt-[157px] pb-[157px]">
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
