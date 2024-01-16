import React from 'react'

import UserInfoForm from './_components/UserInfoForm'
import UserHobbyForm from './_components/UserHobbyForm'

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <form className="mx-auto w-[610px] bg-white px-[87px] pt-[71px]">
        <p className="mb-[10px] text-[26px] font-[700]">Lime</p>
        <h1 className="mb-[69px] text-[30px] font-[600]">프로필 작성</h1>
        <UserInfoForm />
        {/* 임시 주석 처리 */}
        {/* <UserHobbyForm /> */}
      </form>
    </main>
  )
}
