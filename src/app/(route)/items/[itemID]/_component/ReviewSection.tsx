import React from 'react'
import Image from 'next/image'

import Review from './Review'

export default function ReviewSection() {
  return (
    <article className="mt-[64px]">
      <div className="flex h-[42px] justify-between border-b-2 border-b-[#000]">
        <p className="text-[18px] font-[600]">리뷰 (12)</p>
        <div className="flex items-center font-[600] text-[#3F3F3F]">
          <Image
            width={14}
            height={14}
            src="/image/icon/icon-pencil.svg"
            alt="write review"
          />
          <p className="flex items-center text-[14px] font-[600]">리뷰작성</p>
        </div>
      </div>
      {/** 리뷰 정렬 */}
      <div className="mb-[12px] mt-[30px] flex text-[12px] font-[500]">
        <button
          className="flex w-[52px] border-r-[0.5px] border-r-[#D4D4D4]"
          type="button"
        >
          베스트순
        </button>
        <button className="ml-[10px]" type="button">
          최신순
        </button>
      </div>
      {/** 리뷰 */}
      <div>
        {/** 리뷰가 없을 경우 */}
        {/* <div className="mt-[51px] flex justify-center font-[500]">
          이 상품의 첫 번째 리뷰를 작성해 보세요
        </div> */}
        <Review />
        <Review />
        <Review />
        <div className="flex h-[80px] items-start justify-center">
          <button
            className="flex items-center text-[14px] font-[600] text-[#BDBDBD]"
            type="button"
          >
            <p>리뷰 더보기</p>
            <Image
              className="ml-2"
              width={14}
              height={14}
              src="/image/icon/icon-arrow_bottom_BD.svg"
              alt="arrow bottom"
            />
          </button>
        </div>
      </div>
    </article>
  )
}
