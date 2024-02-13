import React from 'react'
import Image from 'next/image'

export default function pages() {
  return (
    <section className=" min-h-[900px] w-[720px]">
      <article className="mt-[21px] h-[264px] rounded-[8px] border border-[#E6E6E6] px-[40px] py-[30px]">
        <div className="flex gap-[6px] text-center text-[12px] font-[500]">
          <div className="h-[24px] w-[51px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px] ">
            스포츠
          </div>
          <div className="h-[24px] w-[51px] rounded-[8px] bg-[#F2F2F2] px-[6px] py-[4px]">
            농구
          </div>
        </div>
        {/** 유저 프로필 */}
        <div className="mt-[18px] flex">
          <div className="h-[40px] w-[40px] rounded-[40px] bg-[#D9D9D9]" />
          <div className="ml-[10px]">
            <div className=" flex h-[17px] font-[700]">
              <strong className="text-[14px]">밝은 노란색 치타</strong>
              <p className="ml-[9.65px] bg-[#000] px-[4px] py-[2px] text-[10px] text-[#fff]">
                Lv. 10
              </p>
            </div>
            <div className="mt-[4px] flex h-[17px] gap-[4px] text-[12px] font-[500] text-[#747474]">
              <span>2024.01.09 · 투표인원 20명</span>
            </div>
          </div>
        </div>
        <p className="mt-[28px] text-[14px] font-[500]">
          농구 시작한지 한달 차인 농린이야! <br />
          농구공 고민중인데 둘 중 뭐가 더 나아?
        </p>
        <p className="mt-[20px] text-[10px] font-[500] text-[#9C9C9C]">
          2024.01.10 투표 마감
        </p>
        <p className="text-[10px] font-[500] text-[#9C9C9C]">6명 참여중</p>
      </article>
      {/** 아이템 투표 */}
      <article className="mt-[12px] flex h-[547px] items-center rounded-[8px] border border-[#E6E6E6] px-[106px]">
        <div className="h-[424px] w-[514px]">
          <div className="flex h-[298px] justify-between">
            {/** item1 */}
            <div className="relative">
              <div className="h-[196px] w-[196px] rounded-[8px] bg-[#EAEAEA]" />
              <div className="absolute bottom-[-4px] h-[150px] w-[196px] rounded-[20px] bg-[#fff] px-[28.7px] pt-[23.1px]">
                <p className="mb-[15.4px] text-center text-[14px] font-[500]">
                  <strong>영결무람 문라이트 야광 반사 농구공 레인보우</strong>
                </p>
                <p className="text-center text-[14px] font-[700]">29,000원</p>
                <div className="mt-[21.39px] flex justify-center">
                  <button
                    className="flex h-[24px] w-[80px] items-center justify-center rounded-[100px] border-[0.385px] border-[#000] px-[11.8px]"
                    type="button"
                  >
                    <p className="mr-[1.54px] text-[10px] font-[500]">
                      상세 보기
                    </p>
                    <Image
                      width={10.322}
                      height={10.322}
                      src="/image/icon/icon-arrow_long_right.svg"
                      alt="right arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[16px] h-[262px] w-[0.77px] bg-[#DEDEDE]" />
            {/** item2 */}
            <div className="relative">
              <div className="h-[196px] w-[196px] rounded-[8px] bg-[#EAEAEA]" />
              <div className="absolute bottom-[-4px] h-[150px] w-[196px] rounded-[20px] bg-[#fff] px-[28.7px] pt-[23.1px]">
                <p className="mb-[15.4px] text-center text-[14px] font-[500]">
                  나이키 조던 레거시 2.0 8P 농구공
                </p>
                <p className="text-center text-[14px] font-[700]">55,900원</p>
                <div className="mt-[21.39px] flex justify-center">
                  <button
                    className="flex h-[24px] w-[80px] items-center justify-center rounded-[100px] border-[0.385px] border-[#000] px-[11.8px]"
                    type="button"
                  >
                    <p className="mr-[1.54px] text-[10px] font-[500]">
                      상세 보기
                    </p>
                    <Image
                      width={10.322}
                      height={10.322}
                      src="/image/icon/icon-arrow_long_right.svg"
                      alt="right arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/** 투표 게이지 */}
          <div className="font=[500] mt-[26px] flex h-[49px] items-center text-[22px] ">
            <div className="flex h-full w-[387px] items-center justify-center rounded-l-[8px] bg-[#000] text-[#fff]">
              4명
            </div>
            <div className="flex h-full w-[127px] items-center justify-center rounded-r-[8px] bg-[#EAEAEA]">
              2명
            </div>
          </div>
          <div className="mt-[36px] flex justify-center">
            <button
              type="button"
              className="h-[48px] w-[136px] rounded-[100px] bg-[#757575] px-[40px] font-[600] text-[#fff]"
            >
              투표하기
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}
