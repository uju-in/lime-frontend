import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <main className="mx-auto w-[794px]">
      <section className="mt-[52px]">
        <div className="flex gap-[15px] text-[20px] font-[700]">
          <button
            type="button"
            className="h-[42.5px] w-[86.5px] rounded-[83.333px] bg-[#000] px-[16px] text-[#fff]"
          >
            스포츠
          </button>
          <button
            type="button"
            className="h-[42.5px] w-[86.5px] rounded-[83.333px] px-[16px] py-[8px] text-[#AAA]"
          >
            라이프
          </button>
        </div>
        <div className="mt-[20px] flex gap-[15px]">
          <button
            type="button"
            className="h-[39px] w-[60px] border-[3px] border-x-0 border-t-0 border-b-[#000] font-[600]"
          >
            농구
          </button>
          <button
            type="button"
            className="h-[39px] w-[60px] font-[500] text-[#6F6F6F]"
          >
            야구
          </button>
          <button
            type="button"
            className="h-[39px] w-[60px] font-[500] text-[#6F6F6F]"
          >
            배드민턴
          </button>
          <button
            type="button"
            className="h-[39px] w-[60px] font-[500] text-[#6F6F6F]"
          >
            헬스
          </button>
          <button
            type="button"
            className="h-[39px] w-[60px] font-[500] text-[#6F6F6F]"
          >
            클라이밍
          </button>
        </div>
        <p className="mt-[69.5px]">
          <strong className="text-[26px] font-[700]">투표 랭킹</strong>
        </p>
        {/** 투표 랭킹 */}
        <div className="mt-[22px] flex gap-[33.5px]">
          {/** 투표 랭킹 Item */}
          <div className="text-center">
            <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full border">
              <div className="flex h-[93px] w-[93px] rounded-full border">
                <div className="flex-1 rounded-l-full bg-[#D9D9D9]" />
                <div className="flex-1 rounded-r-full bg-[#B6B6B6]" />
              </div>
            </div>
            <p className="mt-[11.4px] text-[14.2px] font-[500] text-[#5D5D5D]">
              6명 참여중
            </p>
          </div>
          <div className="text-center">
            <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full border">
              <div className="flex h-[93px] w-[93px] rounded-full border">
                <div className="flex-1 rounded-l-full bg-[#D9D9D9]" />
                <div className="flex-1 rounded-r-full bg-[#B6B6B6]" />
              </div>
            </div>
            <p className="mt-[11.4px] text-[14.2px] font-[500] text-[#5D5D5D]">
              6명 참여중
            </p>
          </div>
        </div>
      </section>
      <section>
        {/** 정렬 버튼 */}
        <div className="mt-[43.14px] flex justify-end">
          <div className="relative">
            <button
              type="button"
              className="h-[14px relative flex w-[71px] items-center justify-end gap-[2px] text-[12px]"
            >
              <span>최신순</span>
              <Image
                width={14}
                height={14}
                src="/image/icon/icon-arrow_bottom.svg"
                alt="arrow button"
              />
            </button>
            {/** 정렬 메뉴 */}
            <div className="absolute left-[-14px] top-[24px] flex h-[92px] w-[88px] flex-col items-start justify-center gap-[10px] rounded-[4px] border-[1.5px] border-[#EDEDED] bg-white px-[17px] py-[11px] text-[11px]">
              <button type="button" className="font-[600]">
                최신순
              </button>
              <button type="button" className="font-[500] text-[#868585]">
                인기순
              </button>
              <button type="button" className="font-[500] text-[#868585]">
                마감순
              </button>
            </div>
          </div>
        </div>
        {/** 투표 리스트 */}
        <article className="mt-[43.5px]">
          <div className="grid grid-cols-2 gap-[20px]">
            {/** 투표 Item */}
            <div className="h-[408px] w-[387px] rounded-[8px] border border-[#E6E6E6] px-[24px] pt-[24px]">
              <div>
                {/** 투표 썸네일 이미지 */}
                <div className="flex h-[208px] w-[340px]">
                  <div className="flex-1 rounded-l-[8px] bg-[#EAEAEA]" />
                  <div className="flex-1 rounded-r-[8px] bg-[#B6B6B6]" />
                </div>
                <p className="mt-[18px] h-[45px] text-[14px] font-[500]">
                  농구 시작한지 한달 차인 농린이야! <br /> 농구공 고민중인데 둘
                  중 뭐가 더 나아?
                </p>
                <p className="mt-[9px] text-[10px] font-[500] text-[#9C9C9C]">
                  6명 참여중
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="mt-[18px] h-[48px] w-[136ox] rounded-[8px] bg-[#757575] px-[26px] font-[600] text-[#fff]"
                  >
                    투표하러 가기
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/** 더보기 버튼 */}
          <div className="mt-[16.8px] flex h-[65px] items-start justify-center">
            <button type="button" className="flex items-center gap-[8px]">
              <span className="text-[14px] font-[600] text-[#CCC]">더보기</span>
              <Image
                width={8}
                height={14}
                src="/image/icon/icon-arrow_bottom_BD.svg"
                alt="arrow bottom"
              />
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}
