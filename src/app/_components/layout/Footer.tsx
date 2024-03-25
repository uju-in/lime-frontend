import { cn } from '@/app/_utils/twMerge'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className={cn(
        'm-[49px_auto_140px] flex w-[1200px] max-w-full bg-white px-[10px]',
        'mo:hidden',
      )}
    >
      <section className="flex w-full gap-[146px]">
        <div className="flex-1">
          <div className="flex gap-[35px]">
            <strong className="text-[24.156px] font-[700]">LIME</strong>
            <div className="flex gap-[21px]">
              <Image
                width={21}
                height={21}
                src="/image/icon/icon-facebook.svg"
                alt="right arrow"
              />
              <Image
                width={21}
                height={21}
                src="/image/icon/icon-instagram.svg"
                alt="right arrow"
              />
              <Image
                width={21}
                height={21}
                src="/image/icon/icon-twitter.svg"
                alt="right arrow"
              />
              <Image
                width={21}
                height={21}
                src="/image/icon/icon-youtube.svg"
                alt="right arrow"
              />
              <Image
                width={21}
                height={21}
                src="/image/icon/icon-mail.svg"
                alt="right arrow"
              />
            </div>
          </div>
          <div className="mt-[22px] flex flex-col gap-[2px] text-[10px] font-[400] text-[#C1C1C1]">
            <p>
              (주) 라임 | 대표 : 우주인 | 주소 : 서울특별시 00구 00로 00번길 00
              | 대표번호 : 02-1234-5678 | 이메일 : lime@naver.com
            </p>
            <p>
              개인정보책임관리자 : 우주인 | 사업자등록번호 : 111-11-11111 |
              통신판매업 신고번호 : 제2023-서울강남-01234호
            </p>
            <p>
              라임은 통신판매중개자로서 중개하는 거래에 대하여 책임을 부담하지
              않습니다.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-[21px] grid grid-cols-3 text-[14px] font-[600]">
            <strong>COMPANY</strong>
            <strong>SERVICE</strong>
            <strong>고객센터</strong>
          </div>
          <div className="grid grid-cols-3 gap-y-[10px] text-[12px] font-[400] text-[#8B8B8B]">
            <span>회사소개</span>
            <span>이용약관</span>
            <button
              type="button"
              className="row-span-2 rounded-[8px] border-2 bg-black text-white"
            >
              문의하기
            </button>
            <span>공지사항</span>
            <span>개인정보처리방침</span>
            <span>FAQ</span>
            <span>신용정보활용체제</span>
            <span>*주중 10시~18시 / 주말 및 공휴일 제외</span>
          </div>
        </div>
      </section>
    </footer>
  )
}
