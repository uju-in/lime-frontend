import Image from 'next/image'
import React from 'react'

/**
 *  첫 줄 div px-[150px] 추가
 */

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between px-[150px] py-[23px]">
      <div className="flex items-center gap-[50px]">
        {/* 로고 */}
        <div className="pr-[50px] text-[35px] font-bold">
          <a href="/">LIME</a>
        </div>
        {/* 카테고리 */}
        <ul className="flex gap-[100px] text-[18px]">
          <li className="font-bold">
            {/* TODO: href 변경 */}
            <a href="/">피드</a>
          </li>
          <li className="font-bold">
            {/* TODO: href 변경 */}
            <a href="/">투표</a>
          </li>
          <li className="group relative flex gap-[8px]">
            <a href="/items" className="font-bold">
              아이템
            </a>
            <Image
              className="cursor-pointer"
              width={20}
              height={20}
              src="../image/icon/icon-arrow_bottom.svg"
              alt="search"
            />
            <div className="absolute left-0 top-[40px] flex min-w-[300px] origin-top scale-y-0 transform divide-x rounded-[4px] bg-white p-[18px_30px] text-[15px] text-[#575757] shadow-[0px_0px_7.8px_3px_rgba(0,0,0,0.10)] transition duration-300 ease-in-out group-hover:scale-y-100">
              <ul className="flex flex-col gap-[13px] pr-[42px]">
                <li className="font-bold text-black">스포츠</li>
                <li>농구</li>
                <li>야구</li>
                <li>배드민턴</li>
                <li>헬스</li>
                <li>클라이밍</li>
              </ul>
              <ul className="flex flex-col gap-[13px] pl-[42px]">
                <li className="font-bold text-black">라이프</li>
                <li>드로잉</li>
                <li>음악</li>
                <li>쿠킹</li>
                <li>게임</li>
                <li>데스크테리어</li>
              </ul>
            </div>
          </li>
        </ul>
        {/* TODO: href 변경 */}
        <a href="/" className="border-l px-[50px] font-bold">
          MY
        </a>
      </div>
      <div className="flex gap-[24px]">
        {/* 검색 */}
        <Image
          className="cursor-pointer"
          width={22}
          height={22}
          src="../image/icon/icon-search.svg"
          alt="search"
        />
        {/* 프로필 */}
        <div className="h-[33px] w-[33px] rounded-full bg-[#777]" />
      </div>
    </div>
  )
}
