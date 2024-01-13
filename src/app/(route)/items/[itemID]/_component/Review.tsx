import React from 'react'
import Image from 'next/image'

export default function Review() {
  return (
    <div className="mt-14 flex h-[190px] justify-between border-b border-[#D2D2D2] px-8">
      <div className="flex h-[140px] w-[530px] flex-col">
        <div className="flex">
          <div className="h-[38px] w-[38px] rounded-full bg-[#D9D9D9]" />
          <div className="ml-3">
            <div className="flex h-[19px] items-center">
              <p className="mr-1 font-[700]">밝은 노란색 치타</p>
              <div className="h-10px flex w-[38px] justify-center rounded-[4px] bg-black">
                <p className="text-[10px] font-[700] text-white">Lv. 10</p>
              </div>
            </div>
            <div className="flex h-[19px] items-end">
              <p className="text-[12px] font-[500] text-[#747474]">
                2024.01.09
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 text-[14px] font-[400]">
          <p>색이 너무 예뻐요~</p>
          <p>공기도 잘 넣어졌고 튀기기도 이 가격에 이만하면 만족해요~</p>
        </div>
        <div className="mt-4 flex">
          <Image
            className="mr-1 cursor-pointer"
            width={15}
            height={15}
            src="/image/icon/icon-like.svg"
            alt="recommend"
          />
          <p className="text-[11px] font-[600]">7</p>
        </div>
      </div>
      <div className="flex h-[140px] w-[150px] flex-col items-end justify-between">
        <div className="flex h-[33px] w-[97px]">
          <Image
            className="mr-1 cursor-pointer"
            width={12}
            height={12}
            src="/image/icon/icon-filled_star.svg"
            alt="grade"
          />
          <Image
            className="mr-1 cursor-pointer"
            width={12}
            height={12}
            src="/image/icon/icon-filled_star.svg"
            alt="grade"
          />
          <Image
            className="mr-1 cursor-pointer"
            width={12}
            height={12}
            src="/image/icon/icon-filled_star.svg"
            alt="grade"
          />
          <Image
            className="mr-1 cursor-pointer"
            width={12}
            height={12}
            src="/image/icon/icon-filled_star.svg"
            alt="grade"
          />
          <Image
            className="mr-1 cursor-pointer"
            width={12}
            height={12}
            src="/image/icon/icon-empty_star.svg"
            alt="grade"
          />
        </div>
        <div className="h-[97px] w-[97px] rounded-[4px] bg-[#D2D2D2]" />
      </div>
    </div>
  )
}
