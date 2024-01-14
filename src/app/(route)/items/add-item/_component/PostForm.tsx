import React from 'react'

import Categories from '../../../../_components/categorySelector'

export default function PostForm() {
  return (
    <form>
      <p className="text-xl font-semibold">
        아이템 추가할 취미를 선택해 주세요.
      </p>
      <Categories />
      <p className="mb-6 mt-12 text-[18px] font-[800px]">
        아이템 추가할 URL을 입력하세요
      </p>
      <div className="flex  w-[690px] justify-between">
        <input className="h-[40px] w-[600px] rounded-[2px] border border-[#DADADA] p-1 focus:outline-none" />
        <button
          className="h-[40px] w-[65px] rounded-[2px] bg-black text-[15px] text-white"
          type="button"
        >
          입력
        </button>
      </div>
      <div className=" mt-[65px] flex justify-center">
        <button
          className="h-[45px] w-[250px] rounded-[2px] bg-black text-[15px] text-white"
          type="submit"
        >
          생성하기
        </button>
      </div>
    </form>
  )
}
