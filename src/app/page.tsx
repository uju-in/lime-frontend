import Layout from '@/app/_components/layout/Layout'
import Image from 'next/image'
import { GetSearchParams } from './_components/GetSearchParams'
import Footer from './_components/layout/Footer'
import CategoryPicker from './_components/categoryPicker/CategoryPicker'

export default function Home() {
  return (
    <Layout>
      {/* 로그인 시 토큰 저장을 위해 임시로 배치한 클라이언트 컴포넌트 */}
      <GetSearchParams />
      <section className="flex justify-center py-[51px]">
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
      </section>
      <CategoryPicker />
      <article className="bg-[#F7F7F7] px-[118px]">
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
        <section className="mt-[157px]">
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">투표</strong>
            <button
              type="button"
              className="flex h-[45px] w-[152px] items-center justify-center gap-[7.5px] rounded-[30px] bg-[#424242] text-[14px] font-[700] text-white"
            >
              <span>투표 더보기</span>
              <Image
                width={18}
                height={18}
                src="/image/icon/icon-arrow_long_right_white.svg"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="mt-[32px] h-[332px]" />
        </section>
        <section className="mt-[157px] pb-[229px]">
          <div className="flex justify-between">
            <strong className="text-[32px] font-[700]">아이템</strong>
            <button
              type="button"
              className="flex h-[45px] w-[152px] items-center justify-center gap-[7.5px] rounded-[30px] bg-[#424242] text-[14px] font-[700] text-white"
            >
              <span>아이템 더보기</span>
              <Image
                width={18}
                height={18}
                src="/image/icon/icon-arrow_long_right_white.svg"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="mt-[32px] h-[290px]" />
        </section>
      </article>
      <Footer />
    </Layout>
  )
}
