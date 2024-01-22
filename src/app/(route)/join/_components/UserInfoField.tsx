'use client'

import React, { ChangeEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useSignUp } from '@/app/_hook/api/useSignUp'
import { useNicknameValidation } from '@/app/_hook/api/useNicknameValidation'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'

import { SignUpState } from '@/app/_types/signUp.types'

import CategorySelector from '@/app/_components/categorySelector'
import CareerSelector from './CareerSelector'

export default function UserInfoField() {
  const router = useRouter()
  const accessToken = useGetSearchParam('accessToken')

  const { mutateAsync: verifyUniqueNickname } = useNicknameValidation()
  const { mutateAsync: signUp } = useSignUp()

  const [isDuplicated, setIsDuplicated] = useState<boolean>(true)
  const [profile, setProfile] = useState<SignUpState>({
    nickname: '',
    career: null,
    mbti: '',
    content: '',
    hobby: '',
  })

  /* query string 토큰 저장 */
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
    }
  }, [])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  /* 닉네임 중복 확인 */
  const handleValidationNickname = async () => {
    const data = await verifyUniqueNickname(profile.nickname)

    if (data.isDuplicated) {
      setIsDuplicated(false)
    } else {
      setIsDuplicated(true)
    }
  }

  /* 회원가입 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const status = await signUp(profile)

    if (status === 200) {
      router.push('/items')
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
            minLength={1}
            maxLength={25}
            onChange={handleChange}
            placeholder="닉네임을 입력해 주세요."
            className="mr-[16px] h-[48px] w-[324px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0"
          />
          <button
            className="h-[48px] w-[96px] cursor-pointer rounded-[4px] bg-black font-[600] text-white"
            type="button"
            onClick={handleValidationNickname}
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
          onChange={handleChange}
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
          onChange={handleChange}
          placeholder="MBTI를 입력해 주세요."
          className="mt-[16px] h-[48px] w-[436px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0"
          maxLength={4}
          minLength={4}
          required
        />
      </div>
      <p className="mt-[36px] font-[600]">대표 취미</p>
      <CategorySelector
        setCategory={(hobby) => setProfile({ ...profile, hobby })}
      />
      <div className="mt-[36px]">
        <p className="mb-[16px] font-[600]">취미 경력</p>
        <CareerSelector
          setCareer={(career) => setProfile({ ...profile, career })}
        />
      </div>
      <div className="h-[198px]">
        <button
          className="mt-[148px] flex h-[48px] w-[436px] items-center justify-center rounded-[4px] bg-black font-[600] text-white"
          type="submit"
        >
          회원가입
        </button>
      </div>
    </form>
  )
}