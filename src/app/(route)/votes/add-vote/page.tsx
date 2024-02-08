import React from 'react'

import VoteForm from './_component/VoteForm'

export default function page() {
  return (
    <section className="w-[780px] bg-[#fff] px-[30px]">
      <h1 className="mb-[10px] pt-[39px] text-[30px] font-[600]">투표 생성</h1>
      <VoteForm />
    </section>
  )
}
