import React from 'react'
import Image from 'next/image'

import Layout from '@/app/_components/layout/Layout'

export default function page() {
  return (
    <Layout>
      <section className="h-full px-[150px]">
        <h1 className="mb-5 text-[36px] font-[700]">세이브 목록</h1>
        <div className="flex">
          <div className="relative mr-5 flex h-[230px] w-[350px]">
            <div className="z-0 h-[230px] w-[270px] rounded-l-[8.83px] bg-[#D2D2D2]" />
            <div className="z-0">
              <div className="h-[115px] w-[120px] rounded-tr-[8.83px] bg-[#E8E8E8]" />
              <div className="h-[115px] w-[120px] rounded-br-[8.83px] bg-[#E8E8E8]" />
            </div>
            <div className="absolute left-0 top-0 z-10 h-[114px] h-full w-full rounded-t-[8.83px] bg-gradient-to-b from-[#000] to-[#D2D2D2] pl-4 pt-4 opacity-50">
              <p className="text-[20px] font-[700] text-white">농구</p>
            </div>
          </div>
          <div className="relative mr-5 flex h-[230px] w-[350px]">
            <div className="z-0 h-[230px] w-[270px] rounded-l-[8.83px] bg-[#D2D2D2]" />
            <div className="z-0">
              <div className="h-[115px] w-[120px] rounded-tr-[8.83px] bg-[#E8E8E8]" />
              <div className="h-[115px] w-[120px] rounded-br-[8.83px] bg-[#E8E8E8]" />
            </div>
            <div className="absolute left-0 top-0 z-10 h-[114px] h-full w-full rounded-t-[8.83px] bg-gradient-to-b from-[#000] to-[#D2D2D2] pl-4 pt-4 opacity-50">
              <p className="text-[20px] font-[700] text-white">드로잉</p>
            </div>
          </div>
          <div className="relative flex h-[230px] w-[350px]">
            <div className="z-0 h-[230px] w-[270px] rounded-l-[8.83px] bg-[#D2D2D2]" />
            <div className="z-0">
              <div className="h-[115px] w-[120px] rounded-tr-[8.83px] bg-[#E8E8E8]" />
              <div className="h-[115px] w-[120px] rounded-br-[8.83px] bg-[#E8E8E8]" />
            </div>
            <div className="absolute left-0 top-0 z-10 h-[114px] h-full w-full rounded-t-[8.83px] bg-gradient-to-b from-[#000] to-[#D2D2D2] pl-4 pt-4 opacity-50">
              <p className="text-[20px] font-[700] text-white">배드민턴</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            className="flex h-[43px] w-[153px] items-center justify-center rounded-[97.6px] bg-[#242424]"
            type="button"
          >
            <p className="font-[600] text-white">폴더 추가하기</p>
            <Image
              className="ml-1 cursor-pointer"
              width={20}
              height={20}
              src="/image/icon/icon-white_plus.svg"
              alt="plus"
            />
          </button>
        </div>
      </section>
    </Layout>
  )
}