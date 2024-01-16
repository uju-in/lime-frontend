import React from 'react'

export default function UserInfoForm() {
  return (
    <>
      <div className="w-[436px]">
        <label htmlFor="nickname" className="font-[600]">
          닉네임
        </label>
        <div className="mt-[16px]">
          <input
            id="nickname"
            placeholder="닉네임을 입력해 주세요."
            className="mr-[16px] h-[48px] w-[324px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0"
          />
          <button
            className="h-[48px] w-[96px] cursor-pointer rounded-[4px] bg-black font-[600] text-white"
            type="button"
          >
            중복확인
          </button>
        </div>
      </div>
      <div className="mt-[36px]">
        <label htmlFor="aboutMe" className="font-[600]">
          자기소개
        </label>
        <textarea
          id="aboutMe"
          placeholder="자기소개를 입력해 주세요."
          className="mt-[16px] h-[140px] w-[436px] resize-none rounded-[4px] border border-[#BDBDBD] px-[12px] pt-[14px] outline-0"
        />
      </div>
      <div className="mt-[36px]">
        <label htmlFor="mbti" className="font-[600]">
          MBTI
        </label>
        <input
          id="mbti"
          placeholder="MBTI를 입력해 주세요."
          className="mt-[16px] h-[48px] w-[436px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0"
        />
      </div>
      <div className="h-[148px]">
        <button
          className="mt-[119px] flex h-[48px] w-[436px] items-center justify-center rounded-[4px] bg-black font-[600] text-white"
          type="button"
        >
          다음
        </button>
      </div>
    </>
  )
}
