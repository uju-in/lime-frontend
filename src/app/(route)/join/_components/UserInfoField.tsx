'use client'

import React, { useState } from 'react'

import CategorySelector from '@/app/_components/categorySelector'

import { useCheckNickname } from '@/app/_hook/api/useCheckNickname'

export default function UserInfoField() {
  const [isDuplicated, setIsDuplicated] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string | null>(null)

  const { mutateAsync: verifyUniqueNickname } = useCheckNickname()

  /* 다음 프로필 작성(취미) */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isDuplicated) {
      alert('닉네임 중복 확인을 진행해 주세요.')
    }
  }

  /* 닉네임 중복 확인 */
  const handleCheckNickname = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()

    if (!nickname) {
      alert('닉네임을 입력하세요.')

      return
    }

    const data = await verifyUniqueNickname(nickname)

    if (data.isDuplicated) {
      setIsDuplicated(false)
    } else {
      setIsDuplicated(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[436px]">
        <label htmlFor="nickname" className="font-[600]">
          닉네임
        </label>
        <div className="mt-[16px]">
          <input
            id="nickname"
            name="nickname"
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력해 주세요."
            className="mr-[16px] h-[48px] w-[324px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0"
          />
          <button
            className="h-[48px] w-[96px] cursor-pointer rounded-[4px] bg-black font-[600] text-white"
            type="button"
            onClick={(e) => handleCheckNickname(e)}
          >
            중복확인
          </button>
        </div>
      </div>
      <div className="mt-[36px]">
        <label htmlFor="content" className="font-[600]">
          자기소개
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="자기소개를 입력해 주세요."
          className="mt-[16px] h-[140px] w-[436px] resize-none rounded-[4px] border border-[#BDBDBD] px-[12px] pt-[14px] outline-0"
          required
        />
      </div>
      <div className="mt-[36px]">
        <label htmlFor="mbti" className="font-[600]">
          MBTI
        </label>
        <input
          id="mbti"
          name="mbti"
          placeholder="MBTI를 입력해 주세요."
          className="mt-[16px] h-[48px] w-[436px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0"
          maxLength={4}
          minLength={4}
          required
        />
      </div>
      <p className="mt-[36px] font-[600]">대표 취미</p>
      <CategorySelector />
      <div className="mt-[36px]">
        <p className="mb-[16px] font-[600]">취미 경력</p>
        <select
          name="startDate"
          className="h-[48px] w-full rounded-[4px] border border-[#BDBDBD] bg-white px-[12px] text-[16px] "
          required
        >
          <option value="" disabled>
            취미 경력을 선택하세요
          </option>
          <option value="0">없음</option>
          <option value="1">1년</option>
          <option value="2">2년</option>
          <option value="3">3년</option>
          <option value="5">4년</option>
          <option value="6">6년</option>
          <option value="7">7년</option>
          <option value="8">8년</option>
          <option value="9">9년</option>
          <option value="10">10년</option>
          <option value="11">11년</option>
          <option value="12">12년</option>
          <option value="13">13년</option>
          <option value="14">14년</option>
          <option value="15">15년</option>
          <option value="16">16년</option>
          <option value="17">17년</option>
          <option value="18">18년</option>
          <option value="19">19년</option>
          <option value="20">20년 이상</option>
        </select>
      </div>
      <div className="h-[128px]">
        <button
          className="mt-[119px] flex h-[48px] w-[436px] items-center justify-center rounded-[4px] bg-black font-[600] text-white"
          type="submit"
        >
          회원가입
        </button>
      </div>
    </form>
  )
}
